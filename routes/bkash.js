// const express = require("express");
// const router = express.Router();
// const bkashController = require("../controllers/bkashController");
//
// router.post("/create", bkashController.createPayment);
//
// router.get("/callback", async (req, res) => {
//
//     if (req.query.status === "success") {
//
//         const data = await bkashController.executePayment(req.query.paymentID);
//
//         // save donation in database
//         console.log("Donation Success", data);
//
//         res.redirect("http://localhost:3000/success");
//     }
//
//     else if (req.query.status === "cancel") {
//         res.redirect("http://localhost:3000/cancel");
//     }
//
//     else {
//         res.redirect("http://localhost:3000/fail");
//     }
//
// });
//
// module.exports = router;