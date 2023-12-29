import axios from 'axios';

import { typeApiResponse } from '@/app/types/api'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const hostname = window.location.hostname;

export const sendApi = async (url: string) => {

  let result: typeApiResponse ;
  if (hostname != DOMAIN) {
    result = {
      staus: 999,
      data: {},
      message: 'domain mismatch',
    }
    return result;
  }

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
  console.log(response)
  if(response.staus != 200){
    location.href = "/error";
  }
}
