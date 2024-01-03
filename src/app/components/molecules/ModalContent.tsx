"use client";
import React, { useState,useContext, useEffect } from 'react';
import { CountContext } from '@/app/layout';

import { AddCalendarButton } from '@/app/components/atoms/button/AddCalendarButton';
import { DateLabel } from '@/app/components/atoms/label/DateLabel';
import { GenreList } from '@/app/components/atoms/list/GenreList';

import { dateFormated } from '@/app/utils/common';
// types
import { typeModalContent } from '@/app/types/components';


const noImg = '/assets/images/no_img.jpg';

export const ModalContent = (props: typeModalContent) => {

  const { genres } = useContext(CountContext);
  const [genreResult, setGenreResult] = useState<string[]>([])

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
    let genreResult: string[] = [];

    let sessionGenres = [...genres];
    if (sessionGenres && genre) {

      for (let i = 0; i < genre.length; i++) {
        let genreId = genre[i].id;

        let targetUser = sessionGenres.find((v) => v.id === genreId);
        if (targetUser) {
          genreResult.push(targetUser.name);
        }
      }
    }
    setGenreResult(genreResult);
  }

  useEffect(() => {
    if (Object.keys(genres).length != 0) {
      genreSet();
    }
  }, [title])


  /**
   * URL入れ込み
   * @returns
   */
  const urlSet = () => {

    let thisUrl = "";
    if (!release_date) {
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
        {itemDate &&  (
          <div>
            <DateLabel>{itemDate}</DateLabel>
          </div>
        )}
        <div className="mt-[30px]">
          <img src={movieImg} alt="" className="mx-auto" />
        </div>
        {
          0 < genreResult.length && (
            <div className="item-genre">
              <GenreList genres={genreResult} />
            </div>
          )
        }
        {
          thisUrl && (
            <div className="mt-10 flex justify-center">
              <AddCalendarButton url={thisUrl} />
            </div>
          )
        }
      </div>
      {
        overview
          && (
          <div className="mt-10">
            <p className="text-lg font-bold mb-2.5">概要</p>
            <div>
              <p>{props.overview}</p>
            </div>
          </div>
          )
      }
    </>
  )
}
export default ModalContent;
