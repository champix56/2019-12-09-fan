(function() {
    'use strict';

    angular
        .module('app')
        .filter('currencyEuro', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(value,fractionSize) {
            console.log(value,fractionSize);
            if(undefined===fractionSize)fractionSize=2;
           
            var puissance10=Math.pow(10,fractionSize);
            var roundValue=Math.round(value*puissance10) / puissance10;
           
            var nbZeroToAdd=String(roundValue).length- String(roundValue).lastIndexOf('.');
            nbZeroToAdd=fractionSize - nbZeroToAdd ;

            for (var i = 0;i <nbZeroToAdd; i++) {
               roundValue=String( roundValue).concat('0');
            }
            roundValue=String( roundValue).concat('€');
            roundValue=roundValue.replace('.',',');
            return String(roundValue);
        }
    }
})();