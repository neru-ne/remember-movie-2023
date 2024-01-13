import Link from "next/link"
import { typeFooterNavi } from "@/app/types/components"

export function FooterNavi(props: typeFooterNavi) {
  const homeAvtive = props.home.active;
  const searchAvtive = props.search.active;

  return (
    <>
      <ul className="footer-navi">
        <li className="">
          {
            homeAvtive ?
            (
                <Link href="/" className="flex items-center justify-center p-1 text-white w-full">
                  <span className="footer-navi__items">
                    <span className="icon-home text-[30px]"></span>
                    <span className="text-sm">Home</span>
                  </span>
                </Link>
            ) : (
                <div className="flex items-center justify-center p-1 w-full text-[#8F8F8F]">
                  <span className="footer-navi__items">
                    <span className="icon-home text-[30px]"></span>
                    <span className="text-sm">Home</span>
                  </span>
                </div>
            )
          }

        </li>
        <li className="">
          {
            searchAvtive ? (
              <Link href="/search" className="flex items-center justify-center p-1 text-white w-full">
                <span className="footer-navi__items">
                  <span className="icon-search text-[30px]"></span>
                  <span className="text-sm">Search</span>
                </span>
              </Link>
            ) : (
                <div className="flex items-center justify-center p-1 w-full text-[#8F8F8F]">
                  <span className="footer-navi__items">
                    <span className="icon-search text-[30px]"></span>
                    <span className="text-sm">Search</span>
                  </span>
                </div>
            )
          }

        </li>
      </ul>
    </>
  )
}
