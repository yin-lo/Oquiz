# Modèle Logique de Données (MLD)

C'est une étape de **traduction** du MCD en vu d'une implémentation dans un SGBDR : 
- français => anglais : on fixe les noms dans la future BDD
  - entités => tables
  - attributs => nom de champ
  - discrimant => ID
- cardinalité/association 
  - soit des clé primaire / étrangère
  - soit des tables de liaison + clé primaires/étrangères

C'est un exercice moins académique, donc deux façons de faire : **schématisé** ou **textuelle**


## Version textuelle

```
user (
  id
  firstname
  lastname
  email
  password
)

quiz (
  id
  title
  description
  #author_id
)

theme (
  id
  name
  description
)

question (
  id
  description
  fact
  wikipedia
  #level_id
  #quizz_id
  #answer_id
)

level (
  id
  name
  color
)

answer (
  id
  description
  #question_id
)

quiz_has_theme (
  id
  #quiz_id
  #theme_id
)

```
SELECT id as QuizId
JOIN quiz ON quiz.quiz_id = user.id
