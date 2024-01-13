"use client";
import React, { useContext, useEffect } from 'react';
import { CountContext } from "@/app/components/layouts/Body"

import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle"
import { DateSelectbox } from '@/app/components/atoms/input/DateSelectbox';
import { setDate } from '@/app/utils/common'

//type
import { typeSelectedDateProps } from '@/app/types/context'


export const SearchDate = () => {
  const { setSelectedDate } = useContext(CountContext);

  let dateArray: typeSelectedDateProps[] = [];
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
