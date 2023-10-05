var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About US" });
});

router.get("/projects", (req, res, next) => {
  res.render("projects", { title: "Projects" });
});

router.get("/home", (req, res, next) => {
  res.render("home", { title: "Home" });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact Us" });
});

module.exports = router;
