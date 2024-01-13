export const ModalCloseButton = (
  props: { click: any, children: React.ReactNode }
  ) => {
  const { click, children } = props;

  return (
    <button className='button-sm' onClick={click}>
      {children}
    </button>
  )
}
