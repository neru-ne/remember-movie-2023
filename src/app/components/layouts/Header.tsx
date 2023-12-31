"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {
        pathname === "/" ? (
          <header className="l-header__top">
            <div className="inner">
              <img src="assets/images/logo.svg" alt="Remember Movie" className="w-[210px] mx-auto mb-5" />
              <p className="text-[15px]">新作映画の公開予定日を<br />Googleカレンダーに<br />登録するだけのシンプルなサービスです。</p>
            </div>
          </header>
        ) :
          (
            <header className="l-header">
              <div className="inner">
                <Link href="/">
                  <img src="assets/images/logo_w.svg" alt="Remember Movie" className="w-[80px]" />
                </Link>
              </div>
            </header>
          )
      }

    </>
  )
}
