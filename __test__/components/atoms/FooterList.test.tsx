import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { FooterList } from '@/app/components/atoms/list/FooterList'
import { typeFooterList } from "@/app/types/components"



const clickEvent = () => {
  console.log("click")
}


describe('FooterList', () => {

  // ダミーのpropsを定義
  let dummyProps: typeFooterList[];


  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = [
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
    ]
  });


  it('propsを渡せるか', () => {
    render(<FooterList {...dummyProps}></FooterList>);
  });

});
