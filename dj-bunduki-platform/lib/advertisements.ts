export type AdvertisementPlacement =
  | 'HEADER'
  | 'HOME'
  | 'MIX_LIST'
  | 'MIX_PAGE'
  | 'BLOG'
  | 'EVENT'
  | 'FOOTER';

export type Advertisement = {
  id: string;
  title: string;
  type: 'IMAGE' | 'CODE';
  imageUrl?: string;
  code?: string;
  link?: string;
  placement: AdvertisementPlacement;
  active: boolean;
};

export function isAdvertisementActive(ad: Advertisement) {
  return ad.active === true;
}

export function getAdvertisementPlacement(ad: Advertisement) {
  return ad.placement;
}
