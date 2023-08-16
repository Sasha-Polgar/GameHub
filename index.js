/*============================
* Import des modules
*==============================*/
const express = require("express");


/*============================
* Configuration d'express
*==============================*/
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

/*============================
* Définitions des routes
*==============================*/
app.get("/",(req, res) => {
    res.render("index",)
})

/*============================
* Lancement du serveur
*==============================*/

app.listen(port, () => {
    console.log(`Votre serveur tourne sur le port ${port}`);
  }); 