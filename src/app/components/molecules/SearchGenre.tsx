"use client";
import React, { useContext, useEffect } from 'react';
import { CountContext } from '@/app/layout';

import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle"

import { Checkbox } from '@/app/components/atoms/input/Checkbox';
//types
import { typeSessionGenres } from '@/app/types/api';


export const SearchGenre = () => {

  const { checkedItems, setCheckedItems,
  } = useContext(CountContext);

  //チェックボックスの制御
  let sessionGenresObj: typeSessionGenres[] = [];

  /**
   * ジャンル配列
   */

  const genreSet = () => {
    let sessionGenres = sessionStorage.getItem('genres');
    let sessionGenresParse: { genres: typeSessionGenres[] };
    let genre: typeSessionGenres[] = [];
    if (sessionGenres) {
      sessionGenresParse = JSON.parse(sessionGenres);
      genre = sessionGenresParse.genres;
      for (var i = 0; i < genre.length; i++) {
        genre[i].checked = false;
      }
    }
    return genre;

  }

  sessionGenresObj = genreSet();

  useEffect(() => {
    setCheckedItems(sessionGenresObj);
  }, [])


  const checkboxClick = (e: any) => {
    let checkedItemsCopy = [...checkedItems];

    let targetValue: string = e.target.value;
    const result = checkedItemsCopy.findIndex((u) => String(u.id) === targetValue);

    if (0 <= result) {

      checkedItemsCopy[result].checked ? checkedItemsCopy[result].checked = false : checkedItemsCopy[result].checked = true
    }

    setCheckedItems(checkedItemsCopy)
  }

  return (
    <>
      <div className="mt-10">
        <SectionTitle mode='primary'>ジャンル</SectionTitle>
        <div className="search-content">
          <ul className="flex flex-wrap gap-4">
            {
              checkedItems.map((item: typeSessionGenres, index: number) => {
                return (
                  <li key={index} className=''>
                    <Checkbox id={item.id} index={index} checked={item.checked} checkboxClick={checkboxClick} name={item.name} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
export default SearchGenre;
