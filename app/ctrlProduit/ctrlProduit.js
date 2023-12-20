(function () {
    'use strict';

    angular
        .module('app')
        .controller('ctrlProduit', CtrlProduit);

    CtrlProduit.$inject = ['srvcProduits', '$scope', '$http', '$routeParams', '$location'];

    function CtrlProduit(srvcProduits, $scope, $http, $routeParams, $location) {
        // var $http=arguments[1];var $routeParams=arguments[2];var $location=arguments[3]
        var vm = this;
        // console.log($routeParams);
        // console.log(arguments);
        this.data = srvcProduits.produit;
        var  _loadProduct = srvcProduits.loadProduct;
        _loadProduct($routeParams.id);

        $scope.onclickaddcart=srvcProduits.onclickaddcart;

    }
})();

//(function(a){console.log(a);})('une chaine de char');