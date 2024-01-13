import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { FooterNavi } from '@/app/components/atoms/list/FooterNavi'
import { typeFooterNavi } from "@/app/types/components"



const clickEvent = () => {
  console.log("click")
}


describe('FooterNavi', () => {

  // ダミーのpropsを定義
  let dummyProps: typeFooterNavi;


  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps ={
      home: {
        active: true,
      },
      search: {
        active: true,
      }
    }
  });


  it('propsを渡せるか', () => {
    render(<FooterNavi {...dummyProps}></FooterNavi>);
  });

});
