# Modèle Conceptuel de Données

## Contexte 

Méthode de modélisation : `Méthode MERISE` (≠ `UML` Unified Modeling Language) -> une façon de "modéliser" la réalité.

**Interpréter un besoin réel dans l'optique de stocker des données**.

Méthode MERISE (🇫🇷) :
- `MCD` : "qu'est-ce qu'on va stocker" 
- `MLD` : "comment on va le stocker"
- `MPD` : "choissisons un SGBD et stockons les données"

## Quelques notes sur le MCD 

`MCD` = 
- une étape conceptuelle
- "c'est pour mamie et les investisseurs" => doit être compréhensible par une personne "non technique".
- **exercice très académique avec un vocabulaire précis !** (en particulier lors du TP)
- le diagramme `MCD` est parfois appelé `Diagramme Entité / Association`
- en général, on rédige en français 🇫🇷

## Liste des `entites` (on appellera ca des tables MAIS PLUS TARD)

- quizz
- themes
- difficulte
- utilisateurs
- questions
- proposition

## Liste des `attributs` (on appellera ca des champs/colonnes MAIS PLUS TARD)

- quizz: titre, description
- themes: nom, description
- difficulte: nom, couleur
- utilisateurs: prenom, nom, email, mot de passe
- questions: description, (anecdote, lien wikipedia)
- proposition: description, estLaBonneReponse

## Ajout des `discriminants` (on appellera ca des identifiants (id) MAIS PLUS TARD)

- quizz: __code-quizz__, titre, description
- themes: __code-theme__, nom, description
- difficulte: __nom__, couleur
- utilisateurs: prenom, nom, __email__, mot de passe
- questions: __code-question__, description, (anecdote, lien wikipedia)
- proposition: __code-proposition__, description, estLaBonneReponse

On peut donc se servir de certains champs (comme l'email pour representer le discriminant d'une entite. A terme, on ajoutera probablement un discriminant unique pour chaque table (sous forme d'id dans les etapes suivantes))

- quizz: __code-quizz__, titre, description
- themes: __code-theme__, nom, description
- difficulte: __code-difficulte__, nom, couleur
- utilisateurs: __code-utilisateurs__, prenom, nom, email, mot de passe
- questions: __code-question__, description, (anecdote, lien wikipedia)
- proposition: __code-proposition__, description, estLaBonneReponse

### Attention : vocabulaire interdit

On reste sur du CONCEPTUEL, donc attention au vocabulaire
- on parle d'association (pas de table)
- on parle d'attributs (pas de colonne ou de champ)
- on parle de discriminant (pas d'ID ou de cle primaire)
- on parle d'association et de cardinalite (pas de cle etrangere ou de table de liaison)

