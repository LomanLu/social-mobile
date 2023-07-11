import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios, { AxiosResponse } from "axios";
import type { CreateRequestConfig, RequestConfig, RequestInterceptors } from "./types";

class Request {
  // axios instance
  instance: AxiosInstance;
  // Interceptor ObjectInterceptor Object
  interceptorsObj?: RequestInterceptors<AxiosResponse>;
  // * Storage of Cancel Request Controller Map
  abortControllerMap: Map<string, AbortController>;

  constructor(config: CreateRequestConfig) {
    this.instance = axios.create(config);
    // * Initialize the Map controller for storing cancellation requests.
    this.abortControllerMap = new Map();
    this.interceptorsObj = config.interceptors;
    // Interceptor Execution Order: Interface Request -> Instance Request -> Global Request -> Instance Response -> Global Response -> Interface Response
    this.instance.interceptors.request.use(
      (res: InternalAxiosRequestConfig) => {
        const controller = new AbortController();
        const url = res.url || "";
        res.signal = controller.signal;
        this.abortControllerMap.set(url, controller);
        return res;
      },
      (err: any) => err
    );

    // Using Interceptor Instance
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // Global response interceptors ensure the final execution.
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const url = res.config.url || "";
        this.abortControllerMap.delete(url);
        return res.data;
      },
      (err: any) => err
    );
  }

  Get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  Post<T>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }

  Put<T>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "PUT" });
  }

  Delete<T>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // If we set up an interceptor for an individual request, here we will use an interceptor for a single request.
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config as any);
      }
      this.instance
        .request<T, any>(config)
        .then(res => {
          // If we set an interceptor for a single response, here we use interceptors for single responses.
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
      // .finally(() => {})
    });
  }

  /**
   * Cancel all requests.
   */
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort();
    }
    this.abortControllerMap.clear();
  }

  /**
   * Cancel the specified request.Cancel the specified request.
   * @param url Request URL to be canceled.
   */
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url];
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort();
      this.abortControllerMap.delete(_url);
    }
  }
}

export default Request;
export { RequestConfig, RequestInterceptors };
