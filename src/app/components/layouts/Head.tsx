'use client'
import { CommonMeta } from "@/app/components/layouts/CommonMeta"
import { metaData } from "@/app/utils/options/metaData"
import { usePathname } from "next/navigation";
import { typeMetaDataObj, typeMetaData } from "@/app/types/common";

export function Head () {
  const pathname: keyof typeMetaDataObj = usePathname();

  const hasKey = pathname in metaData;
  let setMeta: typeMetaData;

  if (hasKey) {
    const key = pathname as keyof typeof metaData;
    setMeta = metaData[key];
  } else {
    setMeta = metaData["/"];
  }
  return(
    <CommonMeta {...setMeta} />
  )
}
