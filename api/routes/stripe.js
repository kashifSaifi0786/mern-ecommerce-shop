const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51LOj6dFWq9lfyCDghT3ZLhYyQbAnZlQSlDQiGdWeDbf0d7GSvwQhJgNkOuXy7KwIXIcTPe1fGZzQwpIAnKcai8yO00Bs5svsZx"
);

router.post("/payment", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
