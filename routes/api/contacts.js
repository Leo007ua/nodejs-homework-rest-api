const express = require("express");

const ctrl = require("../../controllers/contacts");

const schemas = require("../../schemas/contactsSchema");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.contactsSchema), ctrl.add);

// router.delete("/:contactId", ctrl.deleteById);

// router.put("/:contactId", validateBody(schemas.contactsSchema), ctrl.updateById);

module.exports = router;
