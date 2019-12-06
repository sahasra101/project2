var db = require("../models");
var passport = require("../config/passport");
var Zillow = require("zillow-node");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/address", function(req, res) {
    console.log("req.body");
    console.log(req.body);
    var params = {
      address: req.body.address,
      citystatezip: req.body.citystatezip,
      rentzestimate: "true"
    };
    console.log(params);

    var z = new Zillow("X1-ZWz17idc5wq96z_6ikyi");

    z.get("GetSearchResults", params).then(function(results) {
      var relInfo = {
        streetAdd: results.response.results.result.address.street,
        cityAdd: results.response.results.result.address.city,
        stateAdd: results.response.results.result.address.state,
        zipAdd: results.response.results.result.address.zipcode,
        lat: results.response.results.result.address.latitude,
        lng: results.response.results.result.address.longitude,
        // zestimate: results.response.results.result.zestimate.amount,
        // rentzestimate: results.response.results.result.rentzestimate.amount,
        zestimate: results.response.results.result.zestimate,
        rentzestimate: results.response.results.result.rentzestimate,
        homeDetailsURL: results.response.results.result.links.homedetails
      };
      res.json(relInfo);
    });
  });
};
