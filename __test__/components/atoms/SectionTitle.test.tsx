import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { SectionTitle } from '@/app/components/atoms/heading/SectionTitle'

const clickEvent = () => {
  console.log("click")
}

describe('SectionTitle', () => {

  // ダミーのpropsを定義
  let dummyProps: { mode?: 'primary'; };

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      mode: "primary",
    };
  });


  it('childrenを表示できるか,propsを渡せるか', () => {
    render(<SectionTitle {...dummyProps}>test</SectionTitle>);
    expect(screen.getByText(dummyChildren)).toBeInTheDocument();
  });

});
