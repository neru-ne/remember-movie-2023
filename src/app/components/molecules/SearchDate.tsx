"use client";
import React, { useContext, useEffect } from 'react';
import { CountContext } from '@/app/layout';

import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle"
import { DateSelectbox } from '@/app/components/atoms/input/DateSelectbox';

//type
import { typeSelectedDateProps } from '@/app/types/context'


export const SearchDate = () => {
  const { setSelectedDate } = useContext(CountContext);

  let dateArray: typeSelectedDateProps[] = [];
  /**
   * selectboxの値をセット
   * @returns
   */
  const setDate = () => {

    let resultArray: typeSelectedDateProps[] = [];
    //ゼロ埋め
    const dateZeroPadding = (data: number) => {
      return ('0' + data).slice(-2);
    }

    let date = new Date();

    //今日
    let today = date.getFullYear() + '-' + dateZeroPadding(date.getMonth() + 1) + '-' + dateZeroPadding(date.getDate());

    //月初を取得
    const monthFirst = (num: number) => {
      let thisDate = new Date(date.getFullYear(), date.getMonth() + num, 1);

      return thisDate.getFullYear() + '-' + dateZeroPadding(thisDate.getMonth()) + '-' + dateZeroPadding(thisDate.getDate());
    }
    //月末を取得
    const monthLast = (num: number) => {
      let thisDate = new Date(date.getFullYear(), date.getMonth() + num, 0);
      return thisDate.getFullYear() + '-' + dateZeroPadding(thisDate.getMonth() + 1) + '-' + dateZeroPadding(thisDate.getDate());
    }
    const MONTH_NUM = 6;
    for (let i = 0; i < MONTH_NUM; i++) {

      let num: number = i + 1;
      let firstDay: string = '';
      let lastDay: string = ''

      if (i < 1) {
        //今月の場合
        firstDay = today;
      } else {
        firstDay = monthFirst(num);
      }
      //来月末
      lastDay = monthLast(num);

      //表示用
      let label = firstDay.slice(0, 7);
      label = label.replace(/-/g, '/');
      if (i === (MONTH_NUM - 1)) {
        //最後の場合
        label += ' 〜';
      }
      let arrayStock = {
        'date': label,
        'first': firstDay,
        'last': lastDay
      }
      resultArray.push(arrayStock);
    }
    return resultArray;
  }
  dateArray = setDate();

  useEffect(() => {
    setSelectedDate([dateArray[0]]);
  }, [])

  //changeしたら値入れ込み
  const selectChange = (e: any) => {
    let selected = e.target;
    const result = dateArray.filter((u) => u.date === selected.value);
    setSelectedDate(result);
  }

  return (
    <div >
      <SectionTitle mode='primary'>公開時期</SectionTitle>
      <DateSelectbox data={dateArray} selectChange={selectChange} />
    </div>
  )
}
export default SearchDate;
