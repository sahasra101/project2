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

  app.get("/api/zillow", function(req, res) {
    var z = new Zillow("X1-ZWz17idc5wq96z_6ikyi");

    var params = {
      address: "120 N Bethlehem Pike Apt 302a",
      citystatezip: "Fort Washington, Pa",
      rentzestimate: "true"
    };

    z.get("GetSearchResults", params).then(function(results) {
      var relInfo = {
        streetAdd: results.response.results.result[0].address.street,
        cityAdd: results.response.results.result[0].address.city,
        stateAdd: results.response.results.result[0].address.state,
        zipAdd: results.response.results.result[0].address.zipcode,
        lat: results.response.results.result[0].address.latitude,
        lng: results.response.results.result[0].address.longitude,
        zestimate: results.response.results.result[0].zestimate.amount,
        rentzestimate: results.response.results.result[0].rentzestimate.amount,
        homeDetailsURL: results.response.results.result[0].links.homedetails
      };
      // console.log(relInfo);
      res.json(relInfo);
    });
  });
};
