(function(){
  angular.module('ngtodos') //getter
          .controller("MainController", MainControllerF);

  MainController.$inject = [];

  function MainControllerF(){
    console.log('Main!');
  }
})();
