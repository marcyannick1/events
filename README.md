# 🎉 **Events** - Application d'événements avec MERN Stack & Docker

Une application web complète permettant aux utilisateurs de **consulter** et de **s'inscrire** à des événements. Ce projet est construit avec le stack MERN (MongoDB, Express, React, Node.js) et entièrement conteneurisé avec **Docker** pour un déploiement simple et cohérent.

---

## 🚀 **Démarrage rapide**

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Docker](https://www.docker.com/get-started) 🐳
- [Docker Compose](https://docs.docker.com/compose/install/) 🔧

### Lancement du projet

Exécutez la commande suivante dans le répertoire racine du projet :

```bash
docker-compose up
```

Cette commande va :
- 📥 Récupérer les images Docker nécessaires
- ⚙️ Configurer les trois services (frontend, backend, base de données)
- 🏃‍♂️ Démarrer l'application complète

### Accès aux services

Une fois démarrés, les services sont accessibles aux adresses suivantes :

- 🖥️ **Frontend** : [http://localhost:5173](http://localhost:5173)  
  _Interface utilisateur pour consulter et s'inscrire aux événements_

- 🔌 **Backend API** : [http://localhost:3000/api](http://localhost:3000/api)  
  _Points d'accès API pour interagir avec la base de données_

- 🗄️ **MongoDB** : `mongodb://localhost:27017`  
  _Base de données où sont stockées les informations_

## 📋 **Description du projet**

Ce projet permet à des utilisateurs de consulter et de s'inscrire à des événements via une interface web moderne et intuitive.

## 🏗️ **Architecture**

L'application est composée de trois services principaux orchestrés avec Docker Compose :

### 🔙 **Backend (Node.js/Express)**

Ce service gère l'API REST qui permet de :
- Lister les événements disponibles
- Créer de nouveaux événements
- Gérer les inscriptions des utilisateurs

#### Points d'API :
- `GET /api/events` : Liste tous les événements
- `POST /api/events` : Crée un nouvel événement
- `POST /api/booking` : Inscrit un utilisateur à un événement

### 🖌️ **Frontend (React/Vite)**

Interface utilisateur réactive qui permet de :
- Parcourir la liste des événements disponibles
- Consulter les détails de chaque événement
- S'inscrire à un événement

### 💾 **Base de données (MongoDB)**

MongoDB stocke toutes les données de l'application :
- Informations sur les événements
- Données des utilisateurs
- Inscriptions aux événements

Un volume Docker (`mongo-data`) assure la persistance des données.

## 🐳 **Images Docker Hub**

Les services utilisent les images suivantes disponibles sur Docker Hub :

- 🔙 [Image Docker Backend](https://hub.docker.com/r/votre-utilisateur/events-backend)
- 🖌️ [Image Docker Frontend](https://hub.docker.com/r/votre-utilisateur/events-frontend)
- 💾 MongoDB (utilisée directement depuis le Docker Hub officiel)

## 🔧 **Commandes utiles**

```bash
# Démarrer les services en arrière-plan
docker-compose up -d

# Arrêter tous les services
docker-compose down

# Voir les logs en temps réel
docker-compose logs -f

# Redémarrer un service spécifique
docker-compose restart backend
```

## 📚 **Questions de réflexion**

### Différence entre `build:` et `image:` dans Docker Compose

- 🔨 **build:** : Construit une image à partir d'un Dockerfile local, permettant la personnalisation selon le code source
- 📦 **image:** : Utilise une image Docker pré-construite, téléchargée depuis Docker Hub ou un autre registre

### Utilisation d'un fichier `.env`

Le fichier `.env` centralise les variables d'environnement pour :
- 🔒 Protéger les informations sensibles (clés API, mots de passe)
- 🔄 Faciliter la gestion de différents environnements (dev, test, prod)
- 🔧 Rendre la configuration plus flexible

### Volumes Docker et persistance des données

Les volumes Docker (comme `mongo-data`) permettent de :
- 💾 Conserver les données même après redémarrage des conteneurs
- 🔄 Assurer la durabilité des informations stockées
- 🏗️ Séparer le stockage des données du cycle de vie des conteneurs

## 🛠️ **Extension possible**

### Ajout d'un reverse proxy NGINX

Si nous devions ajouter un reverse proxy (comme NGINX) pour gérer le trafic, voici comment nous pourrions l’intégrer :
- Ajouter un service nginx dans le fichier docker-compose.yml.
- figurer NGINX pour rediriger les requêtes HTTP vers les services appropriés, notamment le frontend et le backend.

```yaml
services:
  # Services existants (backend, frontend, db)...
  
  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    ports:
      - "80:80"
    depends_on:
      - frontend
      - backend
    networks:
      - app-network
```

Avec un fichier `nginx.conf` pour configurer la redirection du trafic vers les services appropriés.