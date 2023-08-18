// logique métier pour chaque route

// Objet qui contient les différentes logiques pour chaque page

const controller = {
    homePage: (req, res) => {
      //rendre la bonne vue index.ejs
      res.render("index");
    },
  };
  
  //export du module controller
  module.exports = controller
  