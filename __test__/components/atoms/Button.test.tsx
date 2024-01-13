import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Button } from '@/app/components/atoms/button/Button'
import { typeButton } from '@/app/types/components';

const clickEvent = () => {
  console.log("click")
}

describe('Button', () => {

  // ダミーのpropsを定義
  let dummyProps: typeButton;
  let dummyPropsButton: typeButton;

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      mode: "primary",
      link: true,
      url: "/search",
    };
    dummyPropsButton = {
      mode: "primary",
      link: false,
      click:clickEvent
    };
  });


  it('propsを正常に渡せるか、childrenを表示できるか', () => {
    render(<Button {...dummyProps} >test</Button>);
    expect(screen.getByText(dummyChildren)).toBeInTheDocument();
  });

  it('押下時、クリックイベントを渡せるか', () => {
    render(<Button {...dummyPropsButton} >test</Button>);
    const button = screen.getByRole('button');
    userEvent.click(button);
  });

});
