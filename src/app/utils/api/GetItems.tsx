import { useContext, useEffect } from 'react';
import { CountContext } from '@/app/layout';

import { sendApi, pageShow } from '@/app/utils/api/api'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


/**
 * item取得
 */
export const GetItems = () => {

  const { setIsLoading, posts, setPosts, setIsEmpty, setApiSuccess
  } = useContext(CountContext);


  /**
   * urlの取得
   */
  const getApiUrl = () => {
    //ゼロ埋め
    const dateZeroPadding = (data: number) => {
      return ('0' + data).slice(-2);
    }
    let date = new Date();
    //今日
    let today = date.getFullYear() + '-' + dateZeroPadding(date.getMonth() + 1) + '-' + dateZeroPadding(date.getDate());

    //さらいげつ
    let newNextMonth2 = new Date(date.getFullYear(), date.getMonth() + 2, 0);

    //来月末
    let nextMonthLast = newNextMonth2.getFullYear() + '-' + dateZeroPadding(newNextMonth2.getMonth() + 1) + '-' + dateZeroPadding(newNextMonth2.getDate());

    return '&language=ja&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_date.gte=' + today + '&primary_release_date.lte=' + nextMonthLast;
  }

  useEffect(() => {

    if (0 < posts.length) {
      return;
    }
    const getApi = getApiUrl();

    setIsEmpty(false);
    setIsLoading(true);

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + TMDB_API_KEY + getApi;

    (async () => {
      const result = await sendApi(url);
      await pageShow(result);

      setPosts(result.data.results);
      setIsLoading(false);

      if (posts.length <= 0) {
        setIsEmpty(true);
      }
      setApiSuccess(true);

    })()

  }, []);
}
