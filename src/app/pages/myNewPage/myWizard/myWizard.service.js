
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage')
    .service('myNewPageService', myNewPageService);

  /** @ngInject */
  function myNewPageService($http) {
    var urltodos='  https://www.datos.gov.co/resource/krpp-ufw8.json';
    var urlDepartamentos='  https://www.datos.gov.co/resource/krpp-ufw8.json?nombre_departamento=';
    var urlCiudades='  https://www.datos.gov.co/resource/krpp-ufw8.json?nombre_municipio=';


    return {
        getDep : function() {
        return $http.get(urltodos)
        .then(function(listaTotal){
          return listaTotal.data ;

          });
        },
        getCiu : function(dep) {
        return $http.get(urlDepartamentos+dep)
        .then(function(listaCiu){
          return listaCiu.data ;

          });
        },
        getCod : function(ciu) {
        return $http.get(urlCiudades+ciu)
        .then(function(listaCod){
          return listaCod.data ;

          });
        }
    };
  }

})();
