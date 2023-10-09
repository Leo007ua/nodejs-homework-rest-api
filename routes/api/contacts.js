const express = require("express");

const ctrl = require("../../controllers/contacts");

const schemas = require("../../schemas/contactsSchema");

const { validateBody, isValidId, authenticate} = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.contactsSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.contactsSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
