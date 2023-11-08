import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
// import Stripe from "stripe";
export const createOrder = async (req, res, next) => {
  //   const stripe = new Stripe(process.env.STRIPE);
try{
  const gig = await Gig.findById(req.params.id);
  if (!gig) {
    return res.status(404).json({ error: 'Gig not found' });
  }
  //   const paymentIntent = await stripe.paymentIntents.create({
  //     amount: gig.price * 100,
  //     currency: "usd",
  // automatic_payment_methods: {
  //       enabled: true,
  //     },
  //   });

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: "temporary",
  });
await newOrder.save()
  res.status(200).send("successful");
} catch (err) {
  res.status(500).json({ error: 'Internal server error' });
  next(err.message);
}
}

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
    
  } catch (err) {
    next(err);
  }
};