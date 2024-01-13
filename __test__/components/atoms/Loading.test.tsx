import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Loading } from '@/app/components/atoms/loading/Loading'


const clickEvent = () => {
  console.log("click")
}
export type typeLoading = {
  loadingStatus: boolean;
}

describe('Loading', () => {

  // ダミーのpropsを定義
  let dummyProps: typeLoading;

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = {loadingStatus:false};
  });

  it('propsを渡せるか', () => {
    const { debug } = render(
      <><Loading loadingStatus={true}></Loading></>
    );
    debug();
  });

  it('propsを渡せるか', () => {
    const { debug} = render(
      <><Loading loadingStatus ={false}></Loading></>
    );
    debug();
  });

});
