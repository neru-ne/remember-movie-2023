"use client";
import { scroller } from 'react-scroll';

import { useContext, useEffect } from 'react';
import { CountContext } from '@/app/layout';

import { sendApi, pageShow } from '@/app/utils/api/api'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const hostname = window.location.hostname;

export const GetSearch = (
  searchFlg: boolean,
  setSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
  moreBtn: boolean,
  setMoreBtn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { setIsLoading, setResultFlg, setIsEmpty, setApiSuccess, selectedDate, checkedItems, sort, searchPosts, setSearchPosts, currentPage, setTotalPages, setTotalResults
  } = useContext(CountContext);

/**
 * urlの取得
 * @returns
 */
  const getApiUrl = () => {

    let searchDate = '';
    //ゼロ埋め
    const dateZeroPadding = (data: number) => {
      return ('0' + data).slice(-2);
    }
    //期間
    if (0 < selectedDate.length) {
      searchDate = '&primary_release_date.gte=' + selectedDate[0].first + '&primary_release_date.lte=' + selectedDate[0].last;
    } else {
      let date = new Date();
      //今日
      let today = date.getFullYear() + '-' + dateZeroPadding(date.getMonth() + 1) + '-' + dateZeroPadding(date.getDate());
      searchDate = '&primary_release_date.gte=' + today;
    }

    //ジャンル
    let searchGenre = '';
    let copyCheckedItems = checkedItems;
    let checkedItemsArray = [];

    let result = copyCheckedItems.filter((u) => u.checked === true);

    if (0 < result.length) {
      for (var i = 0; i < result.length; i++) {
        checkedItemsArray.push(result[i].id);
      }
      searchGenre = '&with_genres=' + checkedItemsArray.join(',');
    }

    //ページ数
    let searchCurrentPage = '&page=' + currentPage;

    //ソート
    let searchSort = '&sort_by=' + sort;

    return '&language=ja&include_adult=false&include_video=false' + searchDate + searchGenre + searchCurrentPage + searchSort;
  }

  useEffect(() => {
    if (searchFlg) {

      if (hostname != DOMAIN) {
        setApiSuccess(false);
        return;
      }

      const getApi = getApiUrl();

      setIsEmpty(false);
      setIsLoading(true);

      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + TMDB_API_KEY + getApi;



      (async () => {
        const result = await sendApi(url);
        await pageShow(result);


        //もっと見るボタンが押されていたら
        if (moreBtn) {
          let copySearchPosts = [...searchPosts];
          let resultData = copySearchPosts.concat(result.data.results);
          setSearchPosts(resultData);
          setMoreBtn(false);
        } else {

          setSearchPosts(result.data.results);
        }
        setTotalPages(Number(result.data.total_pages));
        let num = Number(result.data.total_results);
        setTotalResults(num.toLocaleString());
        setSearchFlg(false);
        setIsLoading(false);


        if (result.data.results <= 0) {
          setIsEmpty(true);
        }
        setApiSuccess(true);

      })()

      setResultFlg(true);

      if (!moreBtn)  {
        //検索結果までスクロール
        scroller.scrollTo('search-result', {
          delay: 0,
          smooth: true,
        })
      }

    }
  }, [searchFlg]);
}
