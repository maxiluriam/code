const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.patch("/", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
