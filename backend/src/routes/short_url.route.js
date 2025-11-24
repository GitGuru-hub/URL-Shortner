import express from 'express';
import { createShortUrl, deleteShortUrl, getAllShortUrls, getShortUrl} from '../controller/short_url.controller.js';
const router = express.Router();

router
    .get("/",getAllShortUrls)
    .post("/",createShortUrl)
    .delete("/:code",deleteShortUrl)
    .get("/:code",getShortUrl);

export default router;