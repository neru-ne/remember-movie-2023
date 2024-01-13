import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { TopPageHeading } from '@/app/components/atoms/heading/TopPageHeading'

const clickEvent = () => {
  console.log("click")
}

describe('TopPageHeading', () => {

  // ダミーのpropsを定義
  let dummyProps: { url: string | undefined };

  const dummyChildren = "test";

  beforeEach(() => {
    // dummyProps = {
    //   url: "/test",
    // };
  });


  it('childrenを表示できるか', () => {
    render(<TopPageHeading >test</TopPageHeading>);
    expect(screen.getByText(dummyChildren)).toBeInTheDocument();
  });

});
