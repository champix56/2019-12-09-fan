(function() {
    'use strict';

    angular
        .module('app')
        .controller('ctrlPanier', ControllerController);

    ControllerController.$inject = ['srvcProduits'];
    function ControllerController(srvcProduits) {
        var vm = this;
        this.panier=srvcProduits.panier;
    }
 
   

    angular
        .module('app')
        .directive('monPanier', MonPanier);

    MonPanier.$inject = ['srvcProduits'];
    function MonPanier(srvcProduits) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: 'ctrlPanier',
            controllerAs: 'ctrlPanier',
            restrict: 'EAC',
            templateUrl:'views/monPanier.html'
           
        };
        return directive;
        
         
    }
 
})();


