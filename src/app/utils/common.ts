import { typeSelectedDateProps } from '@/app/types/context'

/**
 * 日付をフォーマット
 * @param data
 * @returns
 */
export const dateFormated = (data:string) => {
  let result = data.replace(/-/g, '/');
  return result;
}


/**
 * 日付をゼロ埋め
 * @param data
 * @returns
 */
export const dateZeroPadding = (data: number) => {
  return ('0' + data).slice(-2);
}

/**
 * selectboxの値をセット
 * @returns
 */
export const setDate = () => {

  let resultArray: typeSelectedDateProps[] = [];
  //ゼロ埋め

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
