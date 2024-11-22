# ArgentBank

![ArgentBank Icon](./src/assets/img/argentBankLogo.webp)

Projet 11 du parcours "Intégrateur Web" chez OpenClassrooms.

L'objectif de la mission consiste à implémenter le front-end d'une application bancaire en utilisant React.

## Mission

### Contexte

Vous venez d'intégrer Argent Bank comme développeur front-end.
Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.
Vous travaillez avec Mila, la cheffe de projet, pour la mise en place du tableau de bord des utilisateurs.

---

## <details><summary><b>Mise en place du dashboard : phase 1</b></summary>

---

Voici un aperçu de ce dont nous avons besoin pour la **phase 1 : Authentification des utilisateurs**.

- Créer l'application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Ce que doit faire l'application (voir les détails pour chacune des fonctionnalités sur nos modèles de GitHub Issues) :
  - L'utilisateur peut visiter la page d'accueil.
  - L'utilisateur peut se connecter au système.
  - L'utilisateur peut se déconnecter du système.
  - L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
  - L'utilisateur ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.

Nos ingénieurs back-end ont déjà créé toutes les routes API dont vous avez besoin. Vous trouverez toute la documentation Swagger à l'intérieur du repo.

Un petit point sur Redux. À ce stade de l'application, cela peut paraître un peu trop, pour le peu de données à passer entre les composants. Mais gardez bien en tête que lorsque nous travaillerons sur les transactions, nous aurons alors beaucoup plus de données à gérer.

A noter lors de l'intégration du contenu des pages : nous aimerions mettre en place des bonnes pratiques de Green Code.

- Il faut veiller en particulier à 2 aspects lors de l'intégration :
  - que les images soient optimisées tant sur le poids que sur les dimensions.
  - que le code soit optimisé par la création, le plus possible, de composants réutilisables.

</details>

---

## <details><summary>Mise en place du dashboard : phase 2</summary>

---

Pour la phase 2 : Transactions, nous sommes encore en phase de conception. Nous mettons au point une fonctionnalité pour les transactions, qui doit pouvoir permettre aux utilisateurs :

- de visualiser toutes leurs transactions pour le mois en cours, groupées par compte
- de visualiser les détails d'une transaction dans une autre vue
- d'ajouter, de modifier ou de supprimer des informations sur une transaction (on ne supprimera ou n'ajoutera pas de transaction)

Afin d'avoir plusieurs avis sur la question, et comme vous travaillez sur l'application dans la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les routes API devraient être modélisées du côté back-end. Nous avons besoin que vous nous fournissiez un document décrivant les routes API proposées pour les manipulations sur les transactions, en suivant les directives de Swagger.

Parmi les éléments clés à spécifier pour chaque endpoint de l'API, il faudra :

- la méthode HTTP (ex. : GET, POST, etc.)
- la route (ex. : /store/inventory)
- la description de ce à quoi correspond l'endpoint
- les paramètres possibles pour tenir compte des différents scénarios
- les différentes réponses avec les codes de réponse correspondants

Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document soit exporté vers un fichier YAML en utilisant la syntaxe Swagger.

</details>

---

### Objectifs

---

- **Utiliser React pour créer l'application**
- **Site responsive**
- **Utiliser React Router pour gérer les routes de l'application**
- **Utiliser Redux pour gérer le state de l'ensemble de l'application**
- **Mettre en place les bonnes pratiques du Green IT**
- **Proposer les routes API pour les manipulations sur les transactions en utilisant Swagger**

### Comptes / Connexion

| Prénom | Nom    | Email            | Mot de passe |
| ------ | ------ | ---------------- | ------------ |
| Tony   | Stark  | tony@stark.com   | password123  |
| Steve  | Rogers | steve@rogers.com | password456  |

## Prérequis

Argent Bank utilise les technologies suivantes :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Assurez-vous d'avoir les bonnes versions et de télécharger les deux packages. Vous pouvez le vérifier avec ces commandes dans votre terminal :

```bash
# Vérification de la version de Node.js
node --version

# Vérification de la version de Mongo
mongo --version
```

- Vous devez avoir Node et `npm` installés localement sur votre machine.

> [!ATTENTION]  
> Le [backend](https://github.com/OpenClassrooms-Student-Center/ArgentBank-Backend) doit également être installé pour lancer ce projet.

## Configuration du projet

### Installation Backend

Pour installer le backend, rendez-vous dans le dossier `backend` et lancez la commande suivante :

```bash
# Installation des dependances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Base de données avec deux utilisateurs
npm run populate-db
```

Après avoir exécuté le script populate-db, vous devriez avoir deux utilisateurs dans votre base de données :

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

Votre serveur devrait maintenant être lancé sur http://localhost:3001 et vous aurez désormais deux utilisateurs dans votre base de données MongoDB !

### Installation Frontend

Pour installer le frontend, rendez-vous dans le dossier `frontend` et lancez la commande suivante :

```bash
# Installation des dependances
npm install

# Démarrer le serveur de redevelopment
npm run start
```

Votre application devrait maintenant fonctionner sur http://localhost:5173 et vous devriez pouvoir se connecter avec les informations de connexion des 2 utilisateurs présents dans la base de données.

## Documentation API

Pour en savoir plus sur le fonctionnement de l'API, une fois votre environnement local démarré, vous pouvez visiter : http://localhost:3001/api-docs

## Ressources de design

Le HTML et CSS statique a été créé pour la majeure partie du site et se trouve dans : `/designs`.

Pour certaines fonctionnalités dynamiques, comme la modification des informations utilisateur, une maquette est disponible dans : `/designs/wireframes/edit-user-name.png`.

Concernant le modèle d'API que vous proposerez pour les transactions, le wireframe se trouve dans : `/designs/wireframes/transactions.png`.
