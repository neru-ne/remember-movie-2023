import { useEffect } from 'react';
import { sendApi, pageShow } from '@/app/utils/api/api'
import { typeSessionGenres } from '@/app/types/api';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

/**
 * ジャンル取得
 */
export const GetGenres = (setGenres: any, setCheckedItems:any) => {

  useEffect(() => {
    const sessionGenres = sessionStorage.getItem('genres');
    if (!sessionGenres) {
      const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + TMDB_API_KEY + '&language=ja';

      (async () => {
        const result = await sendApi(url);
        await pageShow(result);

        sessionStorage.setItem('genres', JSON.stringify(result.data.genres));
        setGenres(result.data.genres);

        const genre: typeSessionGenres[] = result.data.genres;
        const checkedData = checkedItemsArray(genre);
        setCheckedItems(checkedData);
      })()

    }else{
      const genre: typeSessionGenres[] = JSON.parse(sessionGenres);
      setGenres(genre);

      const checkedData = checkedItemsArray(genre);
      setCheckedItems(checkedData);
    }
  }, []);

  //search ジャンルcheckbox用の配列
  const checkedItemsArray = (data:typeSessionGenres[]) => {
    const genreData = data;
    for (let i = 0; i < genreData.length; i++) {
      genreData[i].checked = false;
    }
    return genreData;
  }

}
