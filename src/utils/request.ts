interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: object;
  header?: object;
}

class Request {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://chat.fugui.info/'; // 在这里设置你的 API 基础地址
  }

  public async request<T = any>({
    url,
    method = 'GET',
    data = {},
    header = {
      "Content-Type":"application/json",
      "Authorization":"Bearer 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"
    },
  }: RequestOptions): Promise<T> {
    return new Promise((resolve, reject) => {
      uni.request({
        url: this.baseURL + url,
        method,
        data,
        header,
        success: (response) => {
          if (response.statusCode === 200) {
            resolve(response.data as T);
          } else {
            reject(response);
          }
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  }

  public get<T = any>(url: string, data?: object): Promise<T> {
    return this.request({ url, method: 'GET', data });
  }

  public post<T = any>(url: string, data?: object): Promise<T> {
    return this.request({ url, method: 'POST', data });
  }

  public put<T = any>(url: string, data?: object): Promise<T> {
    return this.request({ url, method: 'PUT', data });
  }

  public delete<T = any>(url: string, data?: object): Promise<T> {
    return this.request({ url, method: 'DELETE', data });
  }
}

const request = new Request();
export default request;
