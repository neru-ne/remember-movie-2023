// common
export type typeMetaData = {
  title: string
  description: string
  url: string
  type: string
  imageUrl: string
}

export type typeMetaDataObj = {
  [K in string]: typeMetaData;
};
