const siteMetadata = {
  title: 'Ashish Vala',
  author: 'Ashish Vala',
  headerTitle: 'ashishvala',
  description: 'Senior Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'http://ashishvala.in',
  siteRepo: 'https://github.com/ashishvala15',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ashishvala15@gmail.com',
  github: 'https://github.com/ashishvala15',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  linkedin: 'https://www.linkedin.com/',
  spotify: 'https://open.spotify.com',
  steam: 'https://steamcommunity.com',
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
