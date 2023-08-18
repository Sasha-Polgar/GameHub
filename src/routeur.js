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

module.exports = router