require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");

const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET
});


app.post("/create-order", async (req, res) => {
  const { name, email, phone, course } = req.body;

  const user = await User.create({
    name,
    email,
    phone,
    course,
    startDate: new Date()
  });

  const order = await razorpay.orders.create({
    amount: 49900,
    currency: "INR"
  });

  res.json({
    orderId: order.id,
    userId: user._id,
    key: process.env.RAZORPAY_KEY
  });
});


app.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  if (expected === razorpay_signature) {
    await User.findByIdAndUpdate(userId, { paid: true });
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});


app.get("/user/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  res.json(user);
});


app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});