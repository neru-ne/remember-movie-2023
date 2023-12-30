"use client";

import { usePathname } from 'next/navigation'
import { FooterList } from "@/app/components/atoms/list/FooterList";
import { FooterNavi } from "@/app/components/atoms/list/FooterNavi";
import { typeFooterList, typeFooterNavi } from "@/app/types/components"


export function Footer() {
  const pathname = usePathname();

  const footerListArray: typeFooterList[] = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "検索",
      url: "/search"
    },
    {
      name: "このサイトについて",
      url: "/about"
    },
    {
      name: "プライバシーポリシー",
      url: "/privacy"
    },
    {
      name: "免責事項",
      url: "/disclaimer"
    },
  ];
  const footerNaviArray: typeFooterNavi = {
    home: {
      active: true,
    },
    search: {
      active: true,
    }
  }
  return (
    <>
      <footer className="l-footer">
        <FooterNavi {...footerNaviArray} />
        <div className='px-4 py-[60px] inner'>
          <FooterList {...footerListArray} />
        </div>
        <div className="footer-bottom">
          <div className="inner">
            <div className='flex gap-2 items-start mb-10'>
              <img src="assets/images/tmdb_logo.svg" alt="tmdb" />
              <div className='text-sm'>
                Remember MovieはTMDb APIを使用しています。
                This product uses the TMDb API but is not endorsed or certified by TMDB.
              </div>
            </div>
            <p className='text-center text-sm'>&copy; {new Date().getFullYear()}  Remember Movie.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
