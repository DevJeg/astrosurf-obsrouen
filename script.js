  function change(id,idcontent){
    document.querySelector('#onglet-auj').classList.remove('onglet-actif');
    document.querySelector('#onglet-hist').classList.remove('onglet-actif');
    document.querySelector('#onglet-membres').classList.remove('onglet-actif');
    document.getElementById(id).classList.add('onglet-actif');
    document.querySelector('#page-aujourdhui').style.display='none';
    document.querySelector('#page-hist').style.display='none';
    document.querySelector('#page-membres').style.display='none';
    document.getElementById(idcontent).style.display='flex';
}
function calday(day){
    let content="";
    switch (day) {
        case 2:
          content="Dimanche 2 janvier à 18h33 : Nouvelle Lune";
          break;
        case 9:
          content="Dimanche 9 janvier à 18h 11 : Premier Quartier de Lune";
          break;
        case 17:
          content="Lundi 17 janvier à 23h 34 : Pleine Lune";
          break;
          case 25:
            content="Mardi 25 janvier à 13h 40 : Dernier Quartier de Lune";
            break;
          case 52:
            content="samedi 5 février 2022 à 21h 30 : séance publique, uniquement sur réservation par mail. ";
            break;
        default:
            content="Aucuns évenement notable à cette date";
          ;
          break;
      }
    document.querySelector('#text').replaceChildren(content);
}