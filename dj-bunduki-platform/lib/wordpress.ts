import axios from "axios";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://djbunduki.co.ke/wp-json";

export const wordpress = axios.create({
  baseURL: WORDPRESS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getWordPressPosts() {
  const response = await wordpress.get("/wp/v2/posts");
  return response.data;
}

export async function getWordPressMedia() {
  const response = await wordpress.get("/wp/v2/media");
  return response.data;
}

export async function getCustomContent(type: string) {
  const response = await wordpress.get(`/wp/v2/${type}`);
  return response.data;
}
