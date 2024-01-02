import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../../../../src/app/components/atoms/button/Button'
import { typeButton } from '@/app/types/components';

describe('Button component with given props', () => {

  // ダミーのpropsを定義
  let dummyProps: typeButton;
  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      mode: "primary",
      link: true,
      url: "/search",
    };
  });

  it('Button:propsを正常に渡せるか', () => {
    // ダミーのpropsを渡してコンポーネントをレンダー
    render(<Button {...dummyProps} >test</Button>);

    expect(screen.getByText(dummyChildren)).toBeInTheDocument();

  });
});
