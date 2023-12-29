
import { typeSelectbox } from "@/app/types/components"


export const Selectbox = (props: typeSelectbox) => {
  const { data, selectChange } = props;
  return (
    <select name="" id="search-date" onChange={selectChange} defaultValue={props.data[0].date}>
      <option value="all">指定なし</option>
      {
        data.map((item: { 'date': string, 'first': string, 'last': string }, index: number) => {
          return <option key={index} value={item.date}>{item.date}</option>
        })
      }
    </select>
  )
}
