import { typeFooterNavi } from "@/app/types/components"
import Link from "next/link"

export function FooterNavi(props: typeFooterNavi) {
  return (
    <>
      <ul>
        <li className="">
          <Link href="/">
            <span className="icon-home"></span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <span className="icon-search"></span>
            <span>Search</span>
            </Link>
        </li>
      </ul>
    </>
  )
}
