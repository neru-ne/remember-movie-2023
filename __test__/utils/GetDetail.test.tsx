import { render, screen } from '@testing-library/react'
import { useState } from 'react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { TopPageHeading } from '@/app/components/atoms/heading/TopPageHeading'
import { CountContext } from "@/app/components/layouts/Body"
import { sendApi, pageShow } from '@/app/utils/api/api'


const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const GetDetail = () => {

  let loading = false;
  let apiSuccess = false;
  let modalContentMovie = "";
  let detailId = "1";


    if (detailId === '') {
      return;
    }
  //detailIdがある時だけ通す
  expect(detailId).toBe("1");

  //通信処理が始まる前、isLoadingはfalseか
  expect(loading).toBe(false);
  //通信が始まる前、apiSuccessはfalseか
  expect(apiSuccess).toBe(false);


  loading = true;
  //isLoadingをtrueにできるか
  expect(loading).toBe(true);


    const url = 'https://api.themoviedb.org/3/movie/' + detailId + '?api_key=' + TMDB_API_KEY + '&language=ja-JA';

    (async () => {
      const result = await sendApi(url);
      await pageShow(result);

      loading = false;
      expect(loading).toBe(false);

      apiSuccess = true;
      modalContentMovie = result.data;

      //通信成功した後、apiSuccessをtrueにできるか
      expect(apiSuccess).toBe(true);


    })()

}


describe('GetDetail', () => {
  test('test',() => {
    GetDetail();
  })

});
