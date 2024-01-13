import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { dateZeroPadding } from "@/app/utils/common"

import { typeSelectedDateProps } from '@/app/types/context'

const setDate = () => {
  let resultArray: typeSelectedDateProps[] = [];
  //ゼロ埋め

  let date = new Date();

  //今日
  let today = date.getFullYear() + '-' + dateZeroPadding(date.getMonth() + 1) + '-' + dateZeroPadding(date.getDate());

  test('今日を取得できるか', () => {
    expect(today).toBe("2024-01-08");
  });


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

const clickEvent = () => {
  console.log("click")
}

describe('SearchDate', () => {

  let dateArray: typeSelectedDateProps[] = [];
  dateArray = setDate();

});

describe('dateZeroPadding', () => {

  test('1桁の数字を0埋めできるか',() => {
    expect(dateZeroPadding(1)).toBe("01");
  })
  test('２桁の数値はそのまま出力されるか', () => {
    expect(dateZeroPadding(10)).toBe("10");
  })


});
