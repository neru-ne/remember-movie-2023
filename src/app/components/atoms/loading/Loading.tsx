export type typeLoading = {
  loadingStatus: boolean;
}

export const Loading = (props: typeLoading) => {
  return(
    <div className={props.loadingStatus ? 'loading' : 'loading is-loaded'}>
      <img src="assets/images/loading.svg" alt="" />
    </div>
  )
}
