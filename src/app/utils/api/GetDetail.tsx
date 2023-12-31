import { useEffect, useContext } from 'react';
import { CountContext } from '@/app/layout';

import { sendApi, pageShow } from '@/app/utils/api/api'


const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


export const GetDetail = () => {
  const { setIsLoading, setApiSuccess, setModalContentMovie, detailId } = useContext(CountContext);

  useEffect(() => {

    if (detailId === '') {
      return;
    }
    setIsLoading(true);

    const url = 'https://api.themoviedb.org/3/movie/' + detailId + '?api_key=' + TMDB_API_KEY + '&language=ja-JA';

    (async () => {
      const result = await sendApi(url);
      await pageShow(result);

      setIsLoading(false);
      setApiSuccess(true);
      setModalContentMovie(result.data);

    })()

  }, [detailId]);
}
