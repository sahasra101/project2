var db = require("../models");

module.exports = function (app) {
  // Find all addresses and return them to the user with res.json
  app.get("/api/property", function (req, res) {
    db.propertie
      .findAll({
        where: {
          userID: req.user.id
        }
      })
      .then(function (dbProperty) {
        res.json(dbProperty);
      });
  });

  // app.get("/api/address/:id", function(req, res) {
  //   // Find one Address with the id in req.params.id and return them to the user with res.json
  //   db.Address.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAddress) {
  //     res.json(dbAddress);
  //   });
  // });

  // eslint-disable-next-line no-unused-vars
  app.post("/api/property", function (req, res) {
    // Create an Address with the data available to us in req.body
    req.body.userID = req.user.id;
    console.log("----------", req.body);
    db.propertie.create(req.body).then(function (dbProperty) {
      res.json(dbProperty);
    });
  });

  app.delete("/api/property/:id", function(req, res) {
    // Delete the Address with the id available to us in req.params.id
    db.propertie
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbAddress) {
        res.json(dbAddress);
      });
  });
};
