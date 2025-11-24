import shortUrl from "../models/short_url.model.js"
import wrapAsync from "../utils/tryCatchWrapper.js"
import { ConflictError, BadRequestError, NotFoundError } from "../utils/errorHandler.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    
    if(!data?.url) throw new BadRequestError("URL is required")
    if(!data?.code) throw new BadRequestError("Code is required")

    const existingUrl = await shortUrl.findOne({ code: data.code })
    if (existingUrl) throw new ConflictError("Code already exists")

    const newShortUrl = await shortUrl.create({
        target_url: data.url,
        code: data.code
    })

    res.status(200).json({shortUrl : process.env.APP_URL + newShortUrl.code})
})

export const deleteShortUrl = wrapAsync(async (req,res)=>{
    const {code} = req.params
    const url = await shortUrl.findOneAndDelete({ code })
    if(!url) throw new NotFoundError("Short URL not found")

    res.status(200).json({message : "Short URL deleted successfully"})
})

export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {code} = req.params
    const url = await shortUrl.findOneAndUpdate({code},{$inc:{clicks:1}, lastClickedAt: Date.now()})
    if(!url) throw new NotFoundError("Short URL not found")
    res.status(302).redirect(url.target_url)
})

export const getShortUrl = async (req,res) => {
    const {code} = req.params
    const url = await shortUrl.findOne({ code });
    if(!url) throw new NotFoundError("Short URL not found")
    res.status(200).json({url})
}

export const getAllShortUrls = async (_,res) => {
    const urls = await shortUrl.find().sort({createdAt:-1});
    res.status(200).json({urls})
}

export const getTargetUrlFromCode = async (req,res) => {
    const {code} = req.params
    const url = await shortUrl.findOne({code});
    if(!url) throw new NotFoundError("Short URL not found")
    res.status(200).json({target_url: url.target_url})
}