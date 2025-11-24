// Je veux afficher une blague aléatoire quand je clique sur le bouton
// Pour cela j'ai besoin de : 
// cibler mon bouton + cibler la zone où je souhaite que la blague apparaisse
// créer un événement qui se déclenche au clic sur le bouton
// cet événement va interroger le back sur la route dédiée à la blague random 
// puis retourner la réponse en json 
// Je dois ensuite afficher cette réponse.

const btnElt = document.querySelector('#joke-btn');
const jokeContainerElt = document.querySelector('.joke-container');

