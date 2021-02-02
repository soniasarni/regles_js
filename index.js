//creer et initialiser deux variables

let numberOfSeasons=6;
let numberOfEpisodes=12;

let information = document.querySelector('#information');
information.innerHTML =+numberOfSeasons+"seasons," +numberOfEpisodes+ "episodes per season";
 
/////////////////////////////////////
//////les types dedonnées

let episodesTitle=("le premier voyage");
let épisodeDuration=45;
let hasBeenwatched=true;
let type_de_donnees=document.getElementById('type_de_donnees');
type_de_donnees.innerText ="le titre:"+ episodesTitle+", duration:"+épisodeDuration+"minutes, est_ce_que vous avez vu l\'pisode?"+hasBeenwatched+ "oui";

//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//EXERCICE3 RECUPERER DES valeurs depuis un objet

let myepisode= {
  Title:"la chevre de monsieur seguin",
  Duration:45,
  isAvailable:true
};

let recuperertitre =myepisode.Title;	//LA CHEVRE DE MONSIEEURSEGUIB
let recuperertime = myepisode.Duration;//45 
let recupererisAvailable=myepisode.isAvailable;

document.querySelector('#episode').innerText = "titre;"+recuperertitre+ ",durrée"+recuperertime+"minutes, est_ce_que vous avez vu l\'pisode?"+recupererisAvailable+ "oui";
//************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************
/*EXERCICE 4 MANIPULER LES CLASSES 
la classe est un modele pour l'objet elle permet de construire un plan et de regrouper tout les objets de meme type  appelée instance de la mê^me classe une instance*/
 class Episode{
	constructor(title, duration, hasBeenwatched){
    this.title=title;
	this.duration=duration;
	this.hasBeenwatched=hasBeenwatched

	}

}
 let firstEpisode= new Episode("la chambre des secrets",2,false);
 let secondEpisode= new Episode("l\'anneau d\'argent",95,true);
 let thirdEpisode= new Episode("le mirroire magique",60,true);
document.getElementById("lesclasses").innerText= thirdEpisode,secondEpisode,firstEpisode;
console.log(firstEpisode, secondEpisode, thirdEpisode);





//µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ
//****************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////////


//EXERCICE5 GERER LA COMLEXITE AVEC array,set ,map


let guests=["sarah", "mohamed","amine","sonia"];
let firstguest= guests[0];
//EXO5
class Episode{
  constructor(title, duration, hasBeenwatched){
    this.title=title;
  this.duration=duration;
  this.hasBeenwatched=hasBeenwatched

  }

}
 let firstEpisode= new Episode("la chambre des secrets",2,false);
 let secondEpisode= new Episode("l\'anneau d\'argent",95,true);
 let thirdEpisode= new Episode("le mirroire magique",60,true);
document.getElementById("lesclasses").innerText= thirdEpisode,secondEpisode,firstEpisode;
console.log(firstEpisode, secondEpisode, thirdEpisode);


let episodes=[firstEpisode, secondEpisode, thirdEpisode];
  /*LES valeurs et les references : types primitif boleen string number sont passer par valeur exemple si on met une variable dans un tableau [var]
  apres on change la valeur de cette var le contenu du tableau ne va pas changé 
  par contre les tableaux et les objets sont passes par reference *
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3

guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests
uests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests

guests.pop(); // supprimer le dernier élément du tableau*/
let episodes=[];
episodes.push(firstEpisode,secondEpisode,thirdEpisode,thirdEpisode);
episodes.pop();
numberOfEpisodes=episodes.length;
document.getElementById("array").innerText= episodes;
   



//**************************************************************************
/////////////////////////////////////////////////////////////////
////              LES ENSEMBLES SETS ET LES MAPS



