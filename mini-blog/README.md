# Gestion des Posts, Users et Comments

Ce projet permet de récupérer des données depuis une API et de les manipuler pour créer un tableau combiné `allPosts` avec des fonctionnalités utiles comme le tri, l'affichage et la pagination.

---

## Objectifs

1. Récupérer tous les **Posts**, **Users** et **Comments** depuis l'API.
2. Convertir les trois réponses en tableaux séparés :
   - `users`
   - `posts`
   - `comments`
3. Créer un nouveau tableau `allPosts` sous la forme suivante :

```json
[
  {
    "id": 1,
    "userName": "toto",
    "title": "un article",
    "body": "le corps de l'article",
    "published": true,
    "comments": [
      {
        // commentaires liés
      }
    ]
  }
]
```
4- Créer les fonctions utilitaires suivantes :

   4.1- sortByUserName() : trie allPosts par nom d'utilisateur.

   4.2- sortByPostTitle() : trie allPosts par titre de post.

   4.3- getPagePosts(offset, size = 10) : retourne un nouveau tableau extrait de allPosts à partir de offset et contenant size éléments.

5- Écrire la fonction showPosts() qui permet d'afficher les 10 premiers posts.

6- Écrire la fonction showComments(postId) qui permet d'afficher les commentaires du post ayant l'id postId.

7- (Facultatif) Ajouter une pagination pour naviguer entre les posts.

```
/project-root
│
├─ index.html
├─ style.css
├─ script.js   # contient toutes les fonctions
└─ README.md
```

