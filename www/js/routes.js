
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


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },


  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
