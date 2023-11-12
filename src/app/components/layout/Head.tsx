'use client'
import { CommonMeta } from "@/app/components/layout/CommonMeta"
import { metaData } from "@/app/options/metaData"
import { usePathname } from "next/navigation";
import { typeMetaDataObj, typeMetaData } from "@/app/types/common";

export function Head () {

  const pathname: keyof typeMetaDataObj = usePathname();

  const hasKey = pathname in metaData;
  let metadata: typeMetaData;

  if (hasKey) {
    const key = pathname as keyof typeof metaData;
    metadata = metaData[key];
  } else {
    metadata = metaData["/"];
  }
  console.log(metadata)

  return(
      <CommonMeta {...metadata} />
  )
}
