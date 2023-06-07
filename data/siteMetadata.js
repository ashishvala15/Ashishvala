const siteMetadata = {
  title: 'Ashish Vala',
  author: 'Ashish Vala',
  headerTitle: 'ashishvala',
  description: 'Senior Software Engineer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://ashishvala.in',
  siteRepo: 'https://github.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ashishvaladeveloper@gmail.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com/AshishV69817188',
  facebook: 'https://facebook.com',
  linkedin: 'https://www.linkedin.com/',
  spotify: 'https://open.spotify.com',
  steam: 'https://steamcommunity.com/id/ashishvala15',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
