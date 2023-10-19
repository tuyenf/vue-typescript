import axios, { AxiosInstance } from 'axios'
import router from '@/router'

export class ApiService {
  private static _instance: ApiService

  private readonly _api: AxiosInstance

  constructor() {
    this._api = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    })

    this._api.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return Promise.reject(error)
      },
    )

    this._api.interceptors.response.use(
      response => {
        /* if (response.data.code == 503) {
          return router.push({ name: 'maintenance.index' })
        }*/
        return response.data
      },
      function (error) {
        if (error?.response?.data?.code == 401) {
          return Promise.reject(error.response.data.msg)
        } else {
          return Promise.reject(error)
        }
      },
    )
  }

  static instance(): ApiService {
    if (!this._instance) this._instance = new ApiService()
    return this._instance
  }

  public get axios(): AxiosInstance {
    return this._api
  }
}
