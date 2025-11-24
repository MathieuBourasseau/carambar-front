# 🍬 Carambar & Co - Landing Page

Interface web interactive pour la marque Carambar & Co.
Cette landing page a pour objectif de divertir l'utilisateur en affichant une blague aléatoire au clic, en consommant l'API développée en parallèle.

## ✨ Fonctionnalités

- Appel API : Connexion dynamique au backend pour récupérer une blague aléatoire via fetch.
- Design : Respect de la charte graphique de la marque (Rose & Jaune).
- Responsive : Interface adaptée aux mobiles, tablettes et ordinateurs.
- Sécurité : Protection contre les failles XSS lors de l'affichage du texte (utilisation de textContent).
- Expérience Utilisateur : Gestion des états de chargement et des erreurs serveur.

## 🛠️ Stack Technique

- HTML5 Sémantique
- CSS3 (Flexbox, Variables CSS, Media Queries, Animations Keyframes)
- JavaScript (Vanilla ES6+, DOM Manipulation, Async/Await)

## 🚀 Comment tester en local ?

Pour faire fonctionner ce projet sur votre machine, vous devez avoir le backend lancé localement ou déployé.

1. Cloner le projet

```bash
git clone git@github.com:MathieuBourasseau/carambar-front.git
cd carambar-front
```

2. Configurer l'API
Ouvrez le fichier script.js et vérifiez la variable API_URL.

- En local : http://localhost:3001/api/v1/jokes/random
- En production : https://carambar-api-1lrv.onrender.com/api/v1/jokes/random

3. Lancer le site
Ouvrez simplement le fichier index.html dans votre navigateur.
(Recommandé : Utilisez l'extension "Live Server" de VS Code pour éviter les blocages CORS liés au protocole file://).

4. Cliquez sur le bouton "JE VEUX RIRE !".

## 🔗 Liens Utiles

- Repository Backend : https://github.com/MathieuBourasseau/carambar-api
- Site en ligne (GitHub Pages) : https://mathieubourasseau.github.io/carambar-front/