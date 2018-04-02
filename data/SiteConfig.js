module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  lessonsDir: 'docs', // The name of the directory that contains lessons or docs.
  siteTitle: 'GoatNickels', // Site title.
  siteTitleAlt: 'GoatNickels - The Shitcoin', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://goatnickels.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'The goat currency of the future', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Goats', // Default category for posts.
  userName: 'Sean McLane', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Salt Lake City, UT', // User location to display in the author segment.
  userAvatar: '', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/seanmclane/goatnickels',
      iconClassName: 'fa fa-github',
    },
  ],
  copyright: 'Copyright © 2018. The Goat Foundation', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#3d3d5c', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ['', 'Chapter 1', 'Chapter 2'], // Used to generate the Table Of Contents. Index 0 should be blank.
};
