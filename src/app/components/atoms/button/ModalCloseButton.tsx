export const ModalCloseButton = (
  props: { click: any, children: React.ReactNode }
  ) => {
  const { click, children } = props;

  return (
    <div className='button-sm' onClick={click}>
      {children}
    </div>
  )
}
