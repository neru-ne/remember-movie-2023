import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { DateLabel } from '@/app/components/atoms/label/DateLabel'


const clickEvent = () => {
  console.log("click")
}

describe('DateLabel', () => {


  const dummyChildren = "test";

  beforeEach(() => {

  });


  it('propsを渡せるか', () => {
    render(<DateLabel >test</DateLabel>);
    expect(screen.getByText(`${dummyChildren} 公開予定`)).toBeInTheDocument();

  });

});
