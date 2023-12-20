
/**
 * remplissage d'un object avec préservation de la reference principale de l'objet target
 * @param {Object} target destination ou la ref est préservé
 * @param {Object} source provenance des donné a deverser dans target
 */
function fillObject(target, source) {
    var champs = Object.keys(target);
    for (var i = 0; i < champs.length; i++) {
        delete(target[champs[i]]);
    }
    
     champs = Object.keys(source);
    for (var i = 0; i < champs.length; i++) {
        target[champs[i]] = source[champs[i]];
    }

}