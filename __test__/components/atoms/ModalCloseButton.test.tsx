import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { ModalCloseButton } from '@/app/components/atoms/button/ModalCloseButton'

const clickEvent = () => {
  console.log("click")
}

describe('ModalCloseButton', () => {

  // ダミーのpropsを定義
  let dummyProps: { click: any };

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      click: clickEvent,
    };
  });


  it('propsを渡せるか,childrenを表示できるか', () => {
    render(<ModalCloseButton {...dummyProps} >test</ModalCloseButton>);
    expect(screen.getByText(dummyChildren)).toBeInTheDocument();

  });

});
