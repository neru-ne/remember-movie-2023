
import { typeDateSelectbox } from "@/app/types/components"


export const DateSelectbox = (props: typeDateSelectbox) => {
  const { data, selectChange } = props;
  return (
    <select name="" className="border border-black rounded-md  w-full block py-2.5 px-4" id="search-date" onChange={selectChange} defaultValue={props.data[0].date}>
      <option value="all">指定なし</option>
      {
        data.map((item: { 'date': string, 'first': string, 'last': string }, index: number) => {
          return <option key={index} value={item.date}>{item.date}</option>
        })
      }
    </select>
  )
}
