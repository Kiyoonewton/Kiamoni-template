export type FeatureCardProps = {
  rating: number;
  dish: string;
  price: number;
  dishName: string;
  favorite?: boolean;
  hasSearch?: boolean;
  link?: string;
  currency?: string;
  hasStar?: boolean;
  hasFavorite?: boolean;
}