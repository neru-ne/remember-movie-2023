import Link from "next/link"
import { typeFooterNavi } from "@/app/types/components"

export function FooterNavi(props: typeFooterNavi) {
  return (
    <>
      <ul className="footer-navi">
        <li className="">
          <Link href="/">
            <span className="footer-navi__items">
              <span className="icon-home text-[30px]"></span>
              <span className="text-sm">Home</span>
            </span>
          </Link>
        </li>
        <li className="">
          <Link href="/search">
            <span className="footer-navi__items">
              <span className="icon-search text-[30px]"></span>
              <span className="text-sm">Search</span>
            </span>
            </Link>
        </li>
      </ul>
    </>
  )
}
