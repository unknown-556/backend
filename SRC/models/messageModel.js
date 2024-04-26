import mongoose from "mongoose";

const messaageSchema = new mongoose.Schema(
    {
        conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
        sender: { typr: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: string,
        seen: {
            type: Boolean,
            default: false,
        },
        img: {
            type: string,
            default: "",
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
