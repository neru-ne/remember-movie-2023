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
    description: '気になる映画の公開予定日をGoogleカレンダーに登録できます。',
    url: `${DOMAIN}/about`,
    type: "article",
    imageUrl: ogp,
  },
  "/privacy": {
    title: `${siteTitle} | プライバシーポリシー`,
    description: '当サイトのプライバシーポリシー',
    url: `${DOMAIN}/privacy`,
    type: "article",
    imageUrl: ogp,
  },
  "/disclaimer": {
    title: `${siteTitle} | 免責事項`,
    description: '当サイトの免責事項',
    url: `${DOMAIN}/disclaimer`,
    type: "article",
    imageUrl: ogp,
  },
  "/search": {
    title: `${siteTitle} | 検索`,
    description: '公開時期とジャンルから公開予定の映画を検索できます。',
    url: `${DOMAIN}/search`,
    type: "article",
    imageUrl: ogp,
  },
}
