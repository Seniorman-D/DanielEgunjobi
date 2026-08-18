export interface Mix {
  id: number | string;
  title: string;
  slug: string;
  artwork?: string;
  audioUrl?: string;
  genre?: string;
  duration?: string;
  description?: string;
  downloads?: number;
  plays?: number;
}

export interface Event {
  id: number | string;
  title: string;
  slug: string;
  image?: string;
  date?: string;
  venue?: string;
  location?: string;
  description?: string;
  whatsappLink?: string;
}

export interface Video {
  id: number | string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
  description?: string;
}

export interface Product {
  id: number | string;
  name: string;
  image?: string;
  price?: string;
  description?: string;
  availability?: string;
}
