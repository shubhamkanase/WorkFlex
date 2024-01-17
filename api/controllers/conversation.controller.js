import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

// import { v4 as uuidv4 } from 'uuid';

export const createConversation = async (req, res, next) => {
  const participants = [req.userId, req.body.to].sort();
  const conversationId = participants.join('_')
  const newConversation = new Conversation({
    id: conversationId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller, 
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    console.log(err)
    next(err);
  }
};
export const updateConversation = async (req, res, next) => {
    try {
      const updatedConversation = await Conversation.findOneAndUpdate(
        { id: req.params.id },
        {
          $set: {
            // readBySeller: req.isSeller,
            // readByBuyer: !req.isSeller,
            ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
          },
        },
        { new: true }
      );
  
      res.status(200).send(updatedConversation);
    } catch (err) {
      next(err);
    }
  }; 

  export const getSingleConversation = async (req, res, next) => {
    try {
      const conversation = await Conversation.findOne({ id: req.params.id });
      if (!conversation) return next(createError(404, "Not found!"));
      res.status(200).send(conversation);
    } catch (err) {
      next(err);
    }
  };
  
  export const getConversations = async (req, res, next) => {
    try {
      const conversations = await Conversation.find(
        req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
      ).sort({ updatedAt: -1 });

      const userIds = conversations.reduce((ids, conversation) => {
        if (req.isSeller) {
          ids.push(conversation.buyerId);
        } else {
          ids.push(conversation.sellerId);
        }
        return ids;
      }, []);
  
      const users = await User.find({ _id: { $in: userIds } });
      const userNameMap = {};
      users.forEach(user => {
        userNameMap[user._id] = user.username; 
      });
  
      const conversationsWithNames = conversations.map(conversation => {
        if (req.isSeller) {
          return {
            ...conversation.toObject(),
            userName: userNameMap[conversation.buyerId],
          };
        } else {
          return {
            ...conversation.toObject(),
            userName: userNameMap[conversation.sellerId],
          };
        }
      });
  
      res.status(200).send(conversationsWithNames);
    } catch (err) {
      next(err);
    }
  };
  // export const getConversations = async (req, res, next) => {
  //   try {
  //     const conversations = await Conversation.find(
  //       req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
  //     ).sort({ updatedAt: -1 });
  //     res.status(200).send(conversations);
  //   } catch (err) {
  //     next(err);
  //   }
  // };