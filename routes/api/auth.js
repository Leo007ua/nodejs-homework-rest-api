const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// verify
router.get("/verify/:verificationToken", ctrl.verifyEmail); 

// verify resent email
router.post("/verify", validateBody(schemas.emailSchema), ctrl.resentVerifyEmail); 

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

// current user
router.get("/current", authenticate, ctrl.getCurrent);

// logout
router.post("/logout", authenticate, ctrl.logout);

// subscription
router.patch("/subscription", authenticate, validateBody(schemas.updateSubscriptionSchema), ctrl.updateSubscription)

// change avatars
router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
