(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('myNewPage', {
          url: '/myNewPage',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'My New Page',
          sidebarMeta: {
            icon: 'ion-clipboard',
            order: 250,
          },
        })
        .state('myNewPage.myWizard',
        {
          url: '/myWizard',
          templateUrl: 'app/pages/myNewPage/myWizard/myWizard.html',
          controller: 'myWizrdCtrl',
          controllerAs: 'vm',
          title: 'my Wizard',
          sidebarMeta: {
            order: 200,
          },
        });

  }

})();
