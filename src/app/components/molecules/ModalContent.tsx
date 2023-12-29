import React from 'react';
import { AddCalendarButton } from '@/app/components/atoms/button/AddCalenderButton';
import { DateLabel } from '@/app/components/atoms/label/DateLabel';
import { GenreList } from '@/app/components/atoms/list/GenreList';

import { dateFormated } from '@/app/utils/common';
// types
import { typeSessionGenres } from '@/app/types/api';
import { typeModalContent } from '@/app/types/components';


const noImg = '/assets/images/no_img.jpg';

export const ModalContent = (props: typeModalContent) => {

  const {
    title,
    release_date,
    poster_path,
    overview,
    genre,
  } = props;

  let movieImg = noImg;

  if (poster_path) {
    movieImg = '//image.tmdb.org/t/p/w300/' + poster_path;
  }
  let itemDate = '';
  if (release_date) {
    itemDate = dateFormated(release_date);
  }

  /**
   * ジャンルを選ぶ
   * @returns
   */
  const genreSet = () => {
    let genreResult:string[] = [];

    let sessionGenres = sessionStorage.getItem('genres');
    let sessionGenresObj: { genres: typeSessionGenres[] };
    if (sessionGenres) {
      sessionGenresObj = JSON.parse(sessionGenres);
      if (!genre) {
        return;
      }
      for (let i = 0; i < genre.length; i++) {
        let genreId = genre[i].id;

        let targetUser = sessionGenresObj.genres.find((v) => v.id === genreId);
        if (targetUser) {
          genreResult.push(targetUser.name);
        }
      }
    }
    return genreResult;
  }
  const genreResult = genreSet();

  /**
   * URL入れ込み
   * @returns
   */
  const urlSet = () => {

    let thisUrl = "";
    if (!release_date){
      return;
    }

    thisUrl = 'https://www.google.com/calendar/event?action=TEMPLATE';

    // 日付をフォーマット
    const thisDate = release_date.split('-');
    const calendarYear = thisDate[0];
    const calendarMonth = thisDate[1];
    const calendarDay = thisDate[2];
    const nextDay = parseInt(calendarDay) + 1;
    const endDay = ('00' + nextDay).slice(-2);

    thisUrl += '&text=' + title + '&dates=' + calendarYear + calendarMonth + calendarDay + '/' + calendarYear + calendarMonth + endDay;

    if (overview) {
      thisUrl += '&details=' + overview;
    }
    return thisUrl;

  }
  const thisUrl = urlSet();

  return (
    <>
      <div>
        <p className="text-xl font-bold mb-5">{props.title}</p>
        <div>
          <DateLabel>{itemDate}</DateLabel>
        </div>
        <div className="mt-[30px]">
          <img src={movieImg} alt="" className="mx-auto" />
        </div>
        <div className="item-genre">
          <GenreList genres={genreResult}/>
        </div>
        <div className="mt-10 flex justify-center">
          <AddCalendarButton url={thisUrl} />
        </div>
      </div>
      {
        props.overview
          ? <div className="mt-10">
            <div>
              <p className="text-lg font-bold mb-2.5">概要</p>
              <div>
                <p>{props.overview}</p>
              </div>
            </div>
          </div>
          : <></>
      }
    </>
  )
}
export default ModalContent;