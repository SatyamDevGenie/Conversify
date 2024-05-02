import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sentMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let gotConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!gotConversation) {
      gotConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
    }
    // await Conversation.save();

    return res.status(201).json({
      message: "Message send successfully",
    });

    // SOCKET IO
  } catch (error) {
    console.log(error);
  }
};
