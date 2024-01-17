import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
  id:{
    type: String,
    required: true,
<<<<<<< HEAD
    unique: true,
=======
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
  },
  sellerId:{
    type: String,
    required: true,
  },
  buyerId:{
    type: String,
    required: true,
  },
  readBySeller:{
    type: Boolean,
    required: true,
  },
  readByBuyer:{
    type: Boolean,
    required: true,
  },
  lastMessage:{
    type: String,
    required: false,
  },
  
},{
  timestamps: true,
});

export default mongoose.model("Conversation", ConversationSchema);