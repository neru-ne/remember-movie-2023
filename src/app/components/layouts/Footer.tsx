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
  const footerNaviArray : typeFooterNavi = {
    home: {
      active: true,
    },
    search: {
      active: true,
    }
  }
  return (
    <>
      <footer className="l-footer bg-[#F8F8F8]">
        {
          pathname != "/" && <FooterNavi {...footerNaviArray} />
        }
        <div>
          <FooterList {...footerListArray} />
        </div>
        <div className="bg-[#3B3B3B]">
          <div>
            <div>
              <div>
                Remember MovieはTMDB APIを使用しています。
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </div>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()}  Remember Movie.</p>
        </div>
      </footer>
    </>
  )
}
