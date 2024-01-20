import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Selectbox } from '@/app/components/atoms/input/Selectbox'
import { typeSelectbox } from "@/app/types/components"


const clickEvent = () => {
  console.log("click")
}

describe('Selectbox', () => {

  // ダミーのpropsを定義
  let dummyProps: typeSelectbox;

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {
      domId: "select-id",
      data: [
        {
          value: "popularity.desc",
          name: "人気順",
        },
        {
          value: "primary_release_date.asc",
          name: "公開予定が近い順",
        },
      ],
      name:"select-id",
      selectChange: clickEvent,
    };
  });


  it('propsを渡せるか', () => {
    render(<Selectbox {...dummyProps}></Selectbox>);

  });

});
