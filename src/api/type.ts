export interface IResult {
  success: boolean
  data?: Record<string, any> | Array<Record<string, any>> | string
  message?: string
  code?: number
}
