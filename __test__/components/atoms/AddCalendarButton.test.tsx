import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { AddCalendarButton } from '@/app/components/atoms/button/AddCalendarButton'

const clickEvent = () => {
  console.log("click")
}

describe('AddCalendarButton', () => {

  // ダミーのpropsを定義
  let dummyProps: { url: string | undefined };

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      url: "/test",
    };
  });


  it('propsを渡せるか', () => {
    render(<AddCalendarButton {...dummyProps}/>);
    expect(screen.getByRole('link', { name: '公開予定日をカレンダーに登録' })).toHaveAttribute('href', '/test')
  });

});
