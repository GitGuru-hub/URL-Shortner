import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (originalUrl, code) => {
    await axiosInstance.post("/links", { url: originalUrl, code })
    console.log(import.meta.env.VITE_BASE_URL)
    return `${import.meta.env.VITE_BASE_URL}/${code}`
}

export const getAllShortUrls = async () => {
    const { data } = await axiosInstance.get("/links")
    return data.urls.map(url => ({
        ...url,
        shortUrl: `${import.meta.env.VITE_BASE_URL}/${url.code}`
    }))
}

export const getShortUrl = async (code) => {
    const { data } = await axiosInstance.get(`/links/${code}`)
    return data
}

export const deleteShortUrl = async (code) => {
    const { data } = await axiosInstance.delete(`/links/${code}`)
    return data
}

export const healthcheck = async () => {
    const { data } = await axiosInstance.get(`/healthz`)
    return data
}