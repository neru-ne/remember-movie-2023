import './globals.css'
import { Head } from "@/app/components/layouts/Head"
import {Header} from "@/app/components/layouts/Header"
import { Footer } from '@/app/components/layouts/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head/>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
