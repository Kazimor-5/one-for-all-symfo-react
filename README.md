# Pré-requis
- Avoir PHP d'installer (version 8.0.2 minimum) et MySQL: https://windows.php.net/download/
Vous pouvez également installer Wamp pour avoir les 2 directement :
https://www.wampserver.com/en/ 
- Dans les 2 cas n'oubliez pas d'ajouter PHP à votre Path.
Avoir composer d'installer : 
https://getcomposer.org/doc/00-intro.md#installation-windows
- Avoir NPM d'installer : 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Avoir le CLI de Symfony d'installer : 
https://symfony.com/download

# Installation
Une fois ceci fois il faudra cloner le projet depuis le repository Gît : https://github.com/Kazimor-5/one-for-all-symfo-react
Une fois ceci fait, rendez vous dans le dossier que vous venez de cloner et effectuer cette commande :  
`composer install`
Elle téléchargera toutes les dépendances liées au projet Symfony.

Toujours dans le même dossier, effectuez cette commande :  
`Npm i`
Cela installera toutes les dépendances liées à JS dont React. 
 
# Utilisation

Pour que le projet soit utilisable il va falloir ouvrir 2 terminals en même temps pour lancer les serveurs back et front. 

Pour lancer le back il faut utiliser : 
`symfony server:start`

Pour le front il faut utiliser : 
`Npm run watch`

Voilà vous êtes fins prêt à contribuer au projet !
