type Props = {
  title: string
  description: string
  url: string
  type: string
  imageUrl: string
}

export const CommonMeta = (props: Props) => {
  const { title, description, url, type, imageUrl } = props
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />

      <meta property="og:site_name" content={title} />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />


      {/* <link rel="canonical" href={url} /> */}

      {/* shortcut icon */}
      <link rel="shortcut icon" href={'https://t-cr.jp/favicon.ico'} />
      <link rel="apple-touch-icon" href={'https://t-cr.jp/logo.png'} />
    </>
  )
}
