import Script from 'next/script';
const GA_ID = process.env.REACT_APP_GA_ID;

export const Gtag = () => {
  return (
    <div className="container">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="google-analytics" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${GA_ID});
        `}
      </Script>
    </div>
  )
}
