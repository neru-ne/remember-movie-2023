// footer
export type typeFooterList = {
  name: string;
  url: string;
}

export type typeFooterNavi = {
  home: {
    active: boolean;
  },
  search: {
    active: boolean;
  }
}

// atoms
export type typeItem = {
  title: string;
  poster_path: string;
  release_date: string;
  id: string;
}

export type typeSearchMoreButton = {
  callBack: React.Dispatch<React.SetStateAction<boolean>>
  btnFlg: React.Dispatch<React.SetStateAction<boolean>>
}
export type typeButton = {
  mode: "primary" | "secondary" | "secondary-green";
  link: boolean;
  url?: string;
  click?: any;
  children?: React.ReactNode;
}

//molecules
export type typeModalContent = {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genre: {
    id: string;
    name: string;
  }[];
}

// input
export type typeSelectbox = {
  domId: string;
  data: {
    value: string;
    name: string
  }[];
  name:string;
  selectChange: any;
}

export type typeDateSelectbox = {
  data: { date: string; first: string; last: string; }[];
  name:string;
  selectChange: any;
}

export type typeCheckbox = {
  id: string,
  checked: boolean | undefined,
  checkboxClick: any,
  index: number,
  name: string,
}
