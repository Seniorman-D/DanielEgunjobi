const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  console.warn('WORDPRESS_API_URL is not configured');
}

export async function wordpressFetch<T>(endpoint: string): Promise<T> {
  if (!WORDPRESS_API_URL) {
    throw new Error('Missing WordPress API configuration');
  }

  const response = await fetch(`${WORDPRESS_API_URL}${endpoint}`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}

export default wordpressFetch;
