//Définition de nos routes et application de la logique de chaque route

//Import d'express
const express = require("express")
//Importer le routeur d'express
const router = express.Router()
//Import de controller
const controller = require("./controller")



//Renseigner nos différentes routes
//router.get(path,chose à faire quand on requete cette adresse)
router.get("/", controller.homePage);
router.get("/game/:nomDuJeu", controller.gamePage);
router.get("/search", controller.searchPage);
router.get("/search/results", controller.resultsPage);

// La route login avec get, renvoie juste le fichier login.ejs
router.get("/login", controller.loginPage);
// longin ave post sert a gerer les requetes de type POST
router.post("/login", controller.loginPostPage)


module.exports = router