(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage')
      .controller('myWizrdCtrl', myWizrdCtrl);

  /** @ngInject */
  function myWizrdCtrl($scope, myNewPageService) {

     var vm = this;
     vm.pasoUno = {};
     vm.pasoDos = {};
     vm.pasoTres = {};


     $scope.CargarDepartamentos=function(){
         myNewPageService.getDep().then(function(data){
           $scope.listaDepartamentos=data;
         });
     }

    $scope.CargarCiudades=function(){
        vm.pasoDos.ciudad="";
       myNewPageService.getCiu(vm.pasoDos.departamento).then(function(data){
         $scope.listaCiudades=data;
       });
    }

    $scope.CargarCodigos=function(){
        vm.pasoDos.codigo="";
       myNewPageService.getCod(vm.pasoDos.ciudad).then(function(data){
         $scope.listaCodigos=data;
       });
    }


    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.pasoTres.confirmPassword && vm.pasoTres.password == vm.pasoTres.confirmPassword;
    };

      vm.arePersonalInfoEmailEqual = function () {
      return vm.pasoTres.confemail && vm.pasoTres.email == vm.pasoTres.confemail;
    };
  }

})();
