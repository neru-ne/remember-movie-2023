import { typeFooterList } from "@/app/types/components"
import Link from "next/link"

export function FooterList(props: typeFooterList[]) {
  return (
    <>
    <ul>
      {
          Object.values(props).map((item,index)=>{
            return(
              <li key={`footerList-${index}`}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            )
          })
      }
    </ul>
    </>
  )
}
