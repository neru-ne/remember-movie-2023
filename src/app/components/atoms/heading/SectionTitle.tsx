export const SectionTitle = (
  props:{
    mode?:'primary' ;
    children: React.ReactNode
  }
  ) => {
  const {mode,children} = props;
  let thisClass = "section-title";
  if (mode){
    switch (mode) {
      case "primary":
        thisClass = thisClass + " -primary";
        break;
      default:
        break;
    }
  }

  return (
    <h2 className={thisClass}>{children}</h2>
  )
}
