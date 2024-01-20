import './globals.css'

import { Head } from "@/app/components/layouts/Head"
import { Body } from "@/app/components/layouts/Body"
import { Gtag } from '@/app/utils/ga/Gtag';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head />
      <body>
        <Gtag/>
        <Body>{children}</Body >
      </body>
    </html>
  )
}
