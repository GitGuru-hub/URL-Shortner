import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  target_url: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  lastClickedAt: {
    type: Date,
    default: null,
  },
},{timestamps: true});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;
