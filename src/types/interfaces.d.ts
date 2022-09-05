export type Maybe<T> = T | undefined;

export interface Product {
  name: string;
  id: string;
  description: string;
  imageURL: string;
  hidden?: boolean;
  artistName: string;
  artworkUrl100: string;
  collectionViewUrl: string;
}

export interface ProductGroup {
  section: string;
  items: Array<Product>;
}

export type GlobalContent = {
  searchTerm: Maybe<string>;
  products: Maybe<Array<Product>>;
  addSearchTerm: (item: string) => void;
  addProducts: (items: Products) => void;
};