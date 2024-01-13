import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { PageHeading } from '@/app/components/atoms/heading/PageHeading'

const clickEvent = () => {
  console.log("click")
}

describe('PageHeading', () => {

  // ダミーのpropsを定義
  let dummyProps: { url: string | undefined };

  const dummyChildren = "test";

  beforeEach(() => {
    // dummyProps = {
    //   url: "/test",
    // };
  });


  it('childrenを表示できるか', () => {
    render(<PageHeading >test</PageHeading>);
    expect(screen.getByText(dummyChildren)).toBeInTheDocument();
  });

});
