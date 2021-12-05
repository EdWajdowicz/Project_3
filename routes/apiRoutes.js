"use strict";

const router = require("express").Router(),
  coursesController = require("../controllers/coursesController"),
  vacationsController = require("../controllers/vacationsController");

router.get(
  "/courses",
  coursesController.index,
  coursesController.filterUserCourses,
  coursesController.respondJSON
);
router.get(
  "/vacations",
  vacationsController.index,
  vacationsController.filterUserVacations,
  vacationsController.respondJSON
);
router.get("/courses/:id/join", coursesController.join, coursesController.respondJSON);
router.use(coursesController.errorJSON);

router.get("/vacations:id/join", vacationsController.join, vacationsController.respondJSON);
router.use(vacationsController.errorJSON);

module.exports = router;
