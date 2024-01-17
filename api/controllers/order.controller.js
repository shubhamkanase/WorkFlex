import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import Stripe from "stripe";

export const intent = async (req, res, next) => {
  const stripe = new Stripe('sk_test_51OAvYMSGEHXrqh5rV4QOndOOTLbAUiE8CZ5P66KznLHlzgCTrDJEdfFiaLcodU5GgZVbVhZjQ6QpAEKk6YsCRlE100ly4WyzW2');
<<<<<<< HEAD
  
=======

>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
  const gig = await Gig.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "inr",
    description: 'Software development services',
<<<<<<< HEAD
  
=======

>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });
  await newOrder.save()
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
<<<<<<< HEAD
  });  
=======
  });
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
}


export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
<<<<<<< HEAD
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);

  } catch (err) {
=======
      // ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      ...({ buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).send(orders);
  } catch (err) {
    console.log(err)
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
    next(err);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
<<<<<<< HEAD
};
=======
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return next(createError(404, "Order not found!"));
    }
    if (order.userId !== req.userId) {
      return next(createError(403, "You can delete only your order!"));
    }
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).send("Order has been deleted!");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
