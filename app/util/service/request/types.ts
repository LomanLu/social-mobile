import type { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";

export interface RequestInterceptors<T> {
  // Request interception
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;

  // Response InterceptionResponse Interception
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

// Customize the incoming parameters.
export interface CreateRequestConfig<T = AxiosResponse>
  extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors<T>;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}

export interface CancelRequestSource {
  [index: string]: () => void;
}
