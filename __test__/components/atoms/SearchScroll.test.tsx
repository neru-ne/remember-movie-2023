import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { SearchScroll } from '@/app/components/atoms/button/SearchScroll'

const clickEvent = () => {
  console.log("click")
}

describe('SearchScroll', () => {

  // ダミーのpropsを定義
  let dummyProps: { click: any };

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      click: clickEvent,
    };
  });


  it('表示できるか', () => {
    render(<SearchScroll></SearchScroll>);
    expect(screen.getByText("再検索")).toBeInTheDocument();
  });

});
