export const DateLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-sm bg-white border border-black rounded-full px-2 py-1 max-[360px]:text-[10px]">
      {children} 公開予定
    </span>
  )
}
