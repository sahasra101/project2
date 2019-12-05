var db = require("../models");

module.exports = function(app) {
  // Find all addresses and return them to the user with res.json
  app.get("/api/address", function(req, res) {
    db.Address.findAll({}).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.get("/api/address/:id", function(req, res) {
    // Find one Address with the id in req.params.id and return them to the user with res.json
    db.Address.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.post("/api/address", function(req, res) {
    // Create an Address with the data available to us in req.body
    console.log(req.body);
    db.Address.create(req.body).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });

  app.delete("/api/address/:id", function(req, res) {
    // Delete the Address with the id available to us in req.params.id
    db.Address.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAddress) {
      res.json(dbAddress);
    });
  });
};
