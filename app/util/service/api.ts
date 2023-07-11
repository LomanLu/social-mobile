import Request, { RequestConfig } from "./request";
import { AxiosResponse } from "axios";

const request = new Request({
  baseURL: "https://hub-v2.o3.network",
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    }
  }
});

export function getAddressBalance<T>(config: RequestConfig<T>) {
  return request.Get({ ...config, url: "v1/evm/address/balance" });
}

export class Test {
  status: string | undefined;
  data: BalanceModel = new BalanceModel();
}

export class BalanceModel {
  address: string = "";
  balance: string = "";
  tokens: Map<string, any> | undefined;
}
