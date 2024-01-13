import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { GenreLabel } from '@/app/components/atoms/label/GenreLabel'


const clickEvent = () => {
  console.log("click")
}

describe('GenreLabel', () => {

  // ダミーのpropsを定義
  let dummyProps: string[] ;

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = [
        "アクション","アドベンチャー","コメディ"
    ];
  });


  it('propsを渡せるか', () => {
    const { debug } =  render(
      <div className='flex gap-x-3 gap-y-4 flex-wrap mt-5'>
        {
          dummyProps.map((item: string, index: number) => {
            return (
              <GenreLabel key={"genre" + index}>{item}</GenreLabel>
            )
          })
        }
      </div>
    );
    debug();
  });

});
