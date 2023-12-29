/**
 * 日付をフォーマット
 * @param data
 * @returns
 */
export const dateFormated = (data:string) => {
  let result = data.replace(/-/g, '/');
  return result;
}
