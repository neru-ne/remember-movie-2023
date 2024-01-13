"use client";
import { scroller } from 'react-scroll';

import { useContext, useEffect } from 'react';
import { CountContext } from "@/app/components/layouts/Body"
import { dateZeroPadding } from '@/app/utils/common';

import { sendApi, pageShow } from '@/app/utils/api/api'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const GetSearch = (
  searchFlg: boolean,
  setSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
  moreBtn: boolean,
  setMoreBtn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const {
    setIsLoading, setResultFlg, setIsEmpty, setApiSuccess, selectedDate, checkedItems, sort, searchPosts, setSearchPosts, currentPage, setTotalPages, setTotalResults
  } = useContext(CountContext);

/**
 * urlの取得
 * @returns
 */
  const getApiUrl = () => {

    let searchDate = '';

    //期間
    if (0 < selectedDate.length) {
      searchDate = `&primary_release_date.gte=${selectedDate[0].first}&primary_release_date.lte=${selectedDate[0].last}`;
    } else {
      const date = new Date();
      //今日
      const today = date.getFullYear() + '-' + dateZeroPadding(date.getMonth() + 1) + '-' + dateZeroPadding(date.getDate());
      searchDate = `&primary_release_date.gte=${today}`;
    }

    //ジャンル
    let searchGenre = '';
    const copyCheckedItems = checkedItems;
    let checkedItemsArray = [];

    const resultGenre = copyCheckedItems.filter((u) => u.checked === true);

    if (0 < resultGenre.length) {
      for (var i = 0; i < resultGenre.length; i++) {
        checkedItemsArray.push(resultGenre[i].id);
      }
      searchGenre = `&with_genres=${checkedItemsArray.join(',')}`;
    }

    //ページ数
    const searchCurrentPage = `&page=${currentPage}`;

    //ソート
    const searchSort = `&sort_by=${sort}`;

    return `&language=ja&include_adult=false&include_video=false${searchDate}${searchGenre}${searchCurrentPage}${searchSort}`;
  }

  useEffect(() => {
    if (searchFlg) {

      const apiParameters = getApiUrl();

      setIsEmpty(false);
      setIsLoading(true);

      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + TMDB_API_KEY + apiParameters;



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
          delay: 200,
          smooth: true,
        })
      }

    }
  }, [searchFlg]);
}
