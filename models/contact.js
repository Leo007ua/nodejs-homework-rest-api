const { Schema, model } = require("mongoose");

const {handleMongooseError }= require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    //   date: {
    //     type: String,
    //     // 16-10-2023
    //     match: /^\d{2}-\d{2}-\d{4}$/,
    //     enum: ["Jan", "Feb", "Mar", "Apr", "May]
    //   },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
