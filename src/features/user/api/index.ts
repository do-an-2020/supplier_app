import request, { IResult } from '@dvh/api'

export const signIn: (email: string, password: string) => Promise<IResult> = async (
  email: string,
  password: string
) => {
  try {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    const result = await request().post('/venderapp/sign_in', formData)

    return {
      success: true,
      data: result.data.data.token,
    }
  } catch (error) {
    return {
      success: false,
      message: '',
    }
  }
}

export const getAccount = async ({ authen }: { authen: string }) => {
  try {
    const result = await request(authen).get('/venderapp/me/account')
    return {
      success: true,
      data: result.data.data,
    }
  } catch (error) {
    return {
      success: false,
      message: '',
    }
  }
}

export const test = () => {}
