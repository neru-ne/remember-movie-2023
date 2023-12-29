import { GenreLabel } from '@/app/components/atoms/label/GenreLabel';
export const GenreList = (props: { genres: string[] | undefined }) => {
  const { genres } = props;

  if (!genres || !Array.isArray(genres)) {
    return;
  }

  return (
    <>
      <div className='flex gap-x-3 gap-y-4 flex-wrap mt-5'>
        {
          genres.map((item: string, index: number) => {
            return (
              <GenreLabel key={"genre" + index}>{item}</GenreLabel>
            )
          })
        }
      </div>
    </>
  )
}
