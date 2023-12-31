import axios from 'axios';

import { typeApiResponse } from '@/app/types/api'

export const sendApi = async (url: string) => {

  let result: typeApiResponse ;

  try {
    const res = await axios.get(
      url, {
      timeout: 30000
    });
    result = {
      staus: res.status,
      data: res.data,
      message: null,
    }
    return result;
  } catch (error: any) {
    result = {
      staus: error.response.status,
      data: {},
      message: error.message,
    }
    return result;
  }
}

export const pageShow = (response: typeApiResponse) => {
  if(response.staus != 200){
    location.href = "/error";
  }
}
