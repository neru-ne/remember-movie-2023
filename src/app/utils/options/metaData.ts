const siteTitle = "Remember Movie";
let DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;

if(!DOMAIN){
  DOMAIN = ""
}

const ogp = `${DOMAIN}/assets/images/OGP.jpg`;
export const metaData = {
  "/": {
    title: siteTitle,
    description: '新作映画の公開予定日をGoogleカレンダーに登録するだけのシンプルなサービスです。',
    url: DOMAIN,
    type: "website",
    imageUrl: ogp,
  },
  "/about": {
    title: `${siteTitle} | このサイトについて`,
    description: 'このサイトについて',
    url: `${DOMAIN}/about`,
    type: "article",
    imageUrl: ogp,
  },
  "/privacy": {
    title: `${siteTitle} | プライバシーポリシー`,
    description: 'プライバシーポリシー',
    url: `${DOMAIN}/privacy`,
    type: "article",
    imageUrl: ogp,
  },
  "/disclaimer": {
    title: `${siteTitle} | 免責事項`,
    description: '免責事項',
    url: `${DOMAIN}/disclaimer`,
    type: "article",
    imageUrl: ogp,
  },
  "/search": {
    title: `${siteTitle} | 検索`,
    description: '検索',
    url: `${DOMAIN}/search`,
    type: "article",
    imageUrl: ogp,
  },
}
