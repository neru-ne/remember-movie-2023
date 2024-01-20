import { typeSelectbox } from "@/app/types/components"

export const Selectbox = (props: typeSelectbox) => {
  const { domId, data, name,selectChange } = props;
  return (
    <select name={name} className="border border-black rounded-md  w-full block py-2.5 px-4" id={domId} onChange={selectChange} defaultValue={data[0].value}>
      {
        data.map((item: {"value": string,"name": string, }, index: number) => {
          return <option key={index} value={item.value}>{item.name}</option>
        })
      }
    </select>
  )
}
