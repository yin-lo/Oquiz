# User stories

**Scénario d'utilisation** = une phrase courte qui récapitule une action utilisateur et ses implications. 

Fait office de **scénario de test** pour valider la bonne implémentation d'une fonctionnalité

Un user-story doit être **atomique** = une seule action si possible

Intérêt : clarifie le besoin avec le client ! Ce qu'on va faire et pas faire, et quand !

## Formalisme

- 🇫🇷 `En tant que [ROLE], je souhaite pouvoir [ACTION], (( afin de [OBJECTIF] ))`
- 🇺🇸 `As a [ROLE], I WANT TO [ACTION], (( SO THAT [GOAL] ))`

## Etape préliminaire

- `visiteur` : utilisateur non connecté
- `membre`: utiliser connecté
- `admin`: utilisateur connecte avec droit d'administration
- `mobile`: utilisateur sur mobile

| `En tant que` | `je souhaite pouvoir`                                   | `afin de`                                                 | `V.` |
| ------------- | ------------------------------------------------------- | --------------------------------------------------------- | ---- |
| visiteur      | accéder à la home page                                  | connaitre l'ensemble des fonctionnalités de l'application | V0   |
| visiteur      | filtrer les quizzes par thème                           | accéder aux quizzes d'un thème particulier                | V1   |
| visiteur      | NE PAS jouer un quiz                                    |                                                           | V1   |
| visiteur      | me créer une compte (signup)                            |                                                           | V1   |
| visiteur      | me connecter à mon compte (login)                       | d'accéder aux fonctionnalités réservés aux membres        | V1   |
| membre        | me déconnecter                                          |                                                           | V1   |
| membre        | accéder à un quiz                                       | répondre aux questions du quiz                            | V0   |
| membre        | vérifier mes réponses au quiz                           | connaitre mon score                                       | V3   |
| membre        | ne pas pouvoir selectionner plusieurs réponses au QCU   |                                                           | V0   |
| membre        | connaitre la difficulté de la question auquel je réponds|                                                           | V0   |
| admin         | modifier un quiz                                        | éditer ses thèmes, actualiser les infos                   | V3   |
| admin         | créer un quiz et des questions                          |                                                           | V3   |
| admin         | créer une nouvelle difficulté                           | quantifier les difficultés des questions                  | V1   |
| membre        | savoir combien de quiz non commencé il me reste         | (pas demandé par Jeff)                                    |VX ?   |
| visiteur      | pouvoir contacter les admin                               | signaler le probleme que je rencontre                  | VX ? |  