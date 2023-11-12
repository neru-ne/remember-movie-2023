import './globals.css'
import { Head } from "@/app/components/layout/Head"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head/>
      <body>
        <header></header>
        <main>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
