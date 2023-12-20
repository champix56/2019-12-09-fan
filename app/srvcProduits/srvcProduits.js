(function () {
    'use strict';
    const SRV_ADR = 'http://localhost:666';
    angular
        .module('app')
        .service('srvcProduits', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        const _RESSOURCE = '/produit'
        this.produits = [];
        this.panier = [];
        this.produit = {};
        var thisSrvc = this;
        this.loadProduct = function (id) {
            $http.get(SRV_ADR + _RESSOURCE + '/' + id)
                .then(function gagne(response) {
                    console.log('j\'ai gagné', response);
                    fillObject(thisSrvc.produit, response.data);


                }, function perdu(response) {
                    console.log('j\'ai perdu', response);
                });
        }

        this.loadProducts = function () {
            $http.get(SRV_ADR + _RESSOURCE)
                .then(function gagne(response) {
                    console.log('j\'ai gagné', response);
                    // console.log(this,thisSrvc);
                    thisSrvc.produits.slice(1);
                    response.data.map(function (element, index, liste) {
                        thisSrvc.produits.push(element);
                    })
                }, function perdu(response) {
                    console.log('j\'ai perdu', response);
                });
        }
        this.onclickaddcart = function (produit) {
            thisSrvc.panier.push(produit);
        }
    }
})();