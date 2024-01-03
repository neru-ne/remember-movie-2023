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
