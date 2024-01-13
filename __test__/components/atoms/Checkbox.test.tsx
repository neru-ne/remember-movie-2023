import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Checkbox } from '@/app/components/atoms/input/Checkbox'
import { typeCheckbox } from '@/app/types/components';
import { typeSessionGenres } from '@/app/types/api';



describe('Checkbox', () => {

  // ダミーのpropsを定義
  let dummyProps: typeSessionGenres[];

  const dummyChildren = "test";

  beforeEach(() => {
    dummyProps = [
      {
        id: "28",
        name: "アクション",
        checked: false,
      },
      {
        id: "12",
        name: "アドベンチャー",
        checked: false,
      },
      {
        "id": "16",
        "name": "アニメーション",
        checked: false,
      },
    ]
  });

  const checkboxClick = (e: any) => {
    console.log("click");
    let checkedItemsCopy = [...dummyProps];


    let targetValue: string = e.target.value;
    const result = checkedItemsCopy.findIndex((u) => String(u.id) === targetValue);

    if (0 <= result) {

      checkedItemsCopy[result].checked ? checkedItemsCopy[result].checked = false : checkedItemsCopy[result].checked = true
    }
  }

});
