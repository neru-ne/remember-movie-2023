export const Button = (
  props: { mode: "primary" | "secondary" | "secondary-green", click: any, children: React.ReactNode }
) => {
  const { mode, click, children } = props;
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
    <div className={buttonClass} onClick={click}>
      {children}
    </div>
  )
}
