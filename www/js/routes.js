
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/alone/',
    url: './pages/alone.html',
  },
  {
    path: '/together/',
    url: './pages/together.html',
  },
  {
    name: "together2",
    path: '/together2/',
    url: './pages/together2.html',
  },
  {
    path: '/erstelleTurnier/',
    url: './pages/erstelleTurnier.html',
  },
  {
    path: '/ladeTurnier/',
    url: './pages/ladeTurnier.html',
  },
  {
    path: '/regelwerk/',
    url: './pages/regelwerk.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  {
    path: '/shop/',
    url: './pages/shop.html',
  },
  {
    path: '/news/',
    url: './pages/news.html',
  },
  {
    path: '/bssb/',
    url: 'https://www.bssb.de/home-blasrohr.html',
  },
  {
    path: '/mail/',
    url: 'mailto:max.mustermann@example.org',
  },


  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
