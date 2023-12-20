

(function() {
    'use strict';
 
    angular.module('app', ['ngRoute']).config(['$routeProvider',function($routeProvider){
            $routeProvider.when('/home',{
                template:'<h1>Bonjour ou DEMAT à tous</h1>et bienvenue \
                à la formation Angular js '
            })
            .when('/produits',{
                templateUrl:'views/produits.html',
                controller:'ctrlProduits',
                controllerAs:'produits'

            })
            .when('/produit/:id',{
                templateUrl:'views/produit.html',
                controller:'ctrlProduit',
                controllerAs:'produit'
            }) 
            .when('/panier',{templateUrl:'views/monPanier.html'})           
            .otherwise({redirectTo:'/home'});
    }]);
})();