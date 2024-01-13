import { typeFooterList } from "@/app/types/components"
import Link from "next/link"

export function FooterList(props: typeFooterList[]) {
  return (
    <>
    <ul>
      {
          Object.values(props).map((item,index)=>{
            const listClass = index != 0 ? "mt-5" :"";
            return(
              <li key={`footerList-${index}`} className={listClass}>
                <Link href={item.url} className="break-all">{item.name}</Link>
              </li>
            )
          })
      }
    </ul>
    </>
  )
}
