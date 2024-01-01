import Link from "next/link"
import { typeButton } from "@/app/types/components"

export const Button = (
  props: typeButton
) => {
  const { mode, link,url, click, children } = props;
  let buttonClass = "";
  switch (mode) {
    case "primary":
      buttonClass = "button";
      break;
    case "secondary":
      buttonClass = "button-sm";
      break;
    case "secondary-green":
      buttonClass = "button-sm -primary";
      break;
    default:
      buttonClass = "button";
      break;
  }

  return (

    <>
      {
        link && url
          ?
          (
            <Link href={url} className={buttonClass} onClick={click}>
              {children}
            </Link >
          )
          :
          (
            <div className={buttonClass} onClick={click}>
              {children}
            </div >
          )
      }
    </>


  )
}
