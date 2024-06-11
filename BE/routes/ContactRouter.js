const express = require("express");
const {
    createContact,
    deleteContact,
    getContact,
    getAllContact,
} = require("../controller/ContactController");
const router = express.Router();

router.post("/", createContact);
router.delete("/:id", deleteContact);
router.get("/:id", getContact);
router.get("/", getAllContact);

module.exports = router;