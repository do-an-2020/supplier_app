// import moduleName from ''

import request, { IResult } from '@dvh/api'

export const getMessageByRoom: ({ authen: string, room: string }) => Promise<IResult> = async ({
  authen,
  room,
}) => {
  try {
    const result = await request(authen).get(`/venderapp/chat/${room}`)
    return {
      success: true,
      data: result.data?.data,
    }
  } catch (error) {
    return {
      success: false,
      message: '',
    }
  }
}

export const a = () => {}
