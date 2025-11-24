// Identify in the DOM the elements required
const btnElt = document.querySelector('.joke-btn');
const jokeContainerElt = document.querySelector('.joke-container');

// API URL
const API = "https://carambar-api-1lrv.onrender.com/api/v1/jokes/random";

const getRandomJoke = async () => {
    try {
        
        // Fetch to the back end
        const response = await fetch(API);

        if(!response.ok){
            throw new Error(`Erreur serveur : ${response.status}`)
        }

        const randomJoke = await response.json();

        // Emptying the content of the div
        jokeContainerElt.innerHTML='';

        // Title joke creation
        const jokeTitleElt = document.createElement('h3');
        jokeTitleElt.style.color = 'var(--color-dark-blue)';
        jokeTitleElt.textContent = randomJoke.question;

        // Answer joke creation
        const jokeAnswerElt = document.createElement('p');
        jokeAnswerElt.style.color = 'var(--color-pink)';
        jokeAnswerElt.textContent = randomJoke.answer;

        // Adding elements to the div
        jokeContainerElt.appendChild(jokeTitleElt);
        jokeContainerElt.appendChild(jokeAnswerElt);


    } catch (error) {

        console.error("Erreur Fetch :", error);
        jokeContainerElt.innerHTML='';

        // Title error creation
        const errorTitleElt = document.createElement('h3');
        errorTitleElt.style.color='red';
        errorTitleElt.textContent="Aïe aïe 😓"

        // Text error creation
        const errorTextElt = document.createElement('p');
        errorTextElt.textContent="Impossible d'afficher une blague aléatoire actuellement..."

        // Adding elements to the div
        jokeContainerElt.appendChild(errorTitleElt);
        jokeContainerElt.appendChild(errorTextElt);

    }
}

// Event onclick added to the button
btnElt.addEventListener('click', getRandomJoke);