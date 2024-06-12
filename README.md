# Test technique Wannup 
## Sommaire
* [Sujet](#sujet)
* [Comment lancer le projet](#comment-lancer-le-projet)
* [Notes a l'intention des observateurs de chez Wannup](#notes-a-lintention-des-observateurs-de-chez-wannup)
* [Notes personnelles](#notes-personnelles)
* [Notes from GitLab](#notes-from-gitlab)


## Sujet
Développer une mini-application de planification de road trip

### Specification
#### Création d'un Itinéraire :
Permettre aux utilisateurs d'ajouter des destinations avec des détails comme le nom, la date d'arrivée, et le Durée du séjour en jours.
Implémente un formulaire pour ajouter ces informations.

#### Affichage de l'Itinéraire :
Affiche la liste des destinations dans l'ordre du voyage avec les dates correspondantes.
Utilise une bibliothèque de visualisation de cartes (comme Leaflet.js) pour tracer le parcours sur une carte.
Applique des styles CSS pour rendre l'affichage attrayant et responsive.

#### Modification et Suppression :
Permettre aux utilisateurs de modifier ou supprimer des destinations.
Utilise des composants modaux pour les modifications.

#### Sauvegarde Locale :
Utilise le Local Storage pour sauvegarder l'itinéraire afin qu'il soit persistant entre les sessions.

#### Bonus (Facultatif mais valorisé) :
Intègre une API pour obtenir des suggestions de destinations populaires.
Ajoute des fonctionnalités de partage de l'itinéraire via un lien unique.
Implémente des tests unitaires pour les composants clés de l'application.

#### Livrables :
Un repository GitLab avec le code source de l'application (et l'historique des commits) => Peux-tu nous l'envoyer pour suivre ton développement ?
Instructions claires pour lancer l'application en local (inclure un fichier README).
Screenshots ou une petite vidéo de démonstration du fonctionnement de l'application.

#### Délai :
Merci de bien vouloir nous faire parvenir ton projet dans un délai de deux semaines à compter de la réception de ce mail. Soit le 12 juin à 23h59.

#### Langages chez wannup.
- HTML
- JavaScript 
- Typescript (nous l'utilisons partout. Cependant si vous n'êtes pas à l'aise avec, une utilisation partielle est acceptée)
- React 
- CSS (Saas)
- webpack est un plus.
- l'utilisation de Docker est un plus. 

## Comment lancer le projet
A la racine du projet, dans un terminal entrer la commande ``docker compose up``

## Notes a l'intention des observateurs de chez Wannup
* J'ai récuperé les couleurs de Wannup depuis votre site
* J'essaie d'éviter d'utiliser des librairies le plus possible parce que les librairies qui sont gratuites pour les particuliers/étudiants ne le sont pas nécessairement pour les entreprises
* Pour les memes raisons j'ai dessine moi-meme le marker
* Pour passer d'une adresse a des coordonnees GPS j'ai du utiliser une API externe car leaflet-goeosearch impose d'etre place damns un enfant du container de ma map, ce qui convenait pas a mon design.
    * J'ai decide d'utiliser OpenStreetMap car je n'ai pas vu de tarification particuliere
* J'ai mis en place un docker compose pour pouvoir ajouter (j'espère avant la fin de temps imparti) un container avec le back, en attendant j'utilise redux
    * update (11/06/2024) : il me reste un peu plus d'un jour, je prefere m'attaquer aux bonus qu'essayer de mettre un back sachant que je n'ai aucune reelle experience la dedans
* Pour les destinations populaire je vais utiliser l'API de tripAdvisor, elle est gratuite tant qu'on ne depasse pas les 5000 requetes/mois. Je n'ai pas trouve mieux

## Notes personnelles
### TODO
* bonus perso
    * dans le container Map
        * dans le popup de la carte, mettre un bouton supprimer et un bouton modifier
        * mettre le geosearch pour obtenir une adresse a partir d'un nom de lieu
            * ajouter une option pour ajouter le resultat en etape
    * dans le Header
        * mettre un bouton pour afficher le mode d'emploi
        * mettre une selection de langue
* bonus
    * Intègre une API pour obtenir des suggestions de destinations populaires.
    * Ajoute des fonctionnalités de partage de l'itinéraire via un lien unique.
    * Implémente des tests unitaires pour les composants clés de l'application.


### Notes
* mettre l'img du pin dans `/front/public/`
* il a fallu bidouiller le css pour degager la description de l'itineraire

### Liens utiles
* [react-leaflet.js](https://react-leaflet.js.org/docs/start-installation/)
* ['puzzle' resolu](https://stackoverflow.com/questions/40719689/how-to-include-leaflet-css-in-a-react-app-with-webpack)
* [react-leaflet tutorial](https://blog.logrocket.com/react-leaflet-tutorial/)
* [react-redux toolkit](https://redux-toolkit.js.org/introduction/getting-started)
* [afficher la date en dd/mm/yyyy](https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object)
* [leaflet-geosearch](https://smeijer.github.io/leaflet-geosearch/#installation)
* [itineraire](http://www.liedman.net/leaflet-routing-machine/)
* [itineraire](https://stackoverflow.com/questions/67658340/how-to-use-leaflet-routing-machine-with-react-leaflet-3)
* [API TripAdvisor](https://www.tripadvisor.com/developers)
* [interrupteur HTML](https://www.w3schools.com/howto/howto_css_switch.asp)

## Notes from GitLab
### Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

### Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/wannup-applicant/test-technique-wannup.git
git branch -M main
git push -uf origin main
```

### Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/wannup-applicant/test-technique-wannup/-/settings/integrations)

### Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

### Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

## Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

### Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

### Name
Choose a self-explaining name for your project.

### Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

### Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

### Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

### Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

### Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

### Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

### Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

### Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

### Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

### License
For open source projects, say how it is licensed.

### Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
