(function () {
    'use strict';

    angular
        .module('app')
        .controller('ctrlProduits', ControllerController);

    ControllerController.$inject = ['$scope','srvcProduits'];
    function ControllerController($scope, srvcProduits) {
       var vm = this;
       this.listeProduits=srvcProduits.produits;
       //JSON.parse('[{"id":1,"titre":"Cidre BRETON","description":"TRES BON CIDRE breton, une reference dans le monde , même en normandie","prix":2.54,"img":"doux.jpg"},{"id":2,"titre":"Cidre NORMAND","description":"CIDRE NORMAND,Tres bon cidre de table apre et amere","prix":5.25,"img":"brut.jpg"}]'); 

        var _loadProducts=srvcProduits.loadProducts
        _loadProducts();
        
        $scope.onclickaddcart=srvcProduits.onclickaddcart;

    }
})();