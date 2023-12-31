import { useEffect } from 'react';
import { sendApi, pageShow } from '@/app/utils/api/api'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

/**
 * ジャンル取得
 */
export const GetGenres = (setGenres:any) => {

  useEffect(() => {
    const sessionGenres = sessionStorage.getItem('genres');
    if (!sessionGenres) {
      const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + TMDB_API_KEY + '&language=ja';

      (async () => {
        const result = await sendApi(url);
        await pageShow(result);

        sessionStorage.setItem('genres', JSON.stringify(result.data.genres));
        setGenres(result.data.genres)
      })()
    }else{

      setGenres(JSON.parse(sessionGenres))

    }
  }, []);

}
