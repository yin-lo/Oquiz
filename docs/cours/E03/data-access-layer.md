## Data Access Layer (DAL)

Le fait d'accéder à nos données (BDD) depuis notre code applicatif (Node).

Il existe plusieurs Design Pattern pour cela : 
- pas de design pattern particulier : `client.query()` directement dans le controlleur
- `dataMapper` : un fichier qui concentre les requêtes à la BDD, et les abstrait pour le consommateur de ce `dataMapper`

Pour réviser (S04) : 
- [x] Ajout de la page des `levels` (brute, sans données)
- [x] Récupérer les données via `pg` directement dans le controlleur
- [x] Mettre la requête `pg` dans un dataMapper

Nouveauté (S05) : 
- pour accéder à la base de données, on va utiliser nos **modèles** (et non plus le dataMapper) !
- ce qui veut dire qu'il faut qu'on améliore nos modèles pour qu'ils puissent appeler la BDD => c'est ça **active record** ! 
- coder les méthodes `Active Record`, c'est ABSTRAIT. En pratique, on utilise un module qui le gère à notre place : `ORM` (Sequelize)
- NOUVEAU TUNNEL : 
  - On code ACTIVE RECORD : E03 (aprem+challenge) -> E04 (matin-correction)
  - E04 aprem' : on utilise un module qui le fait à notre place