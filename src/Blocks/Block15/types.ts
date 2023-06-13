import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position: string
}

export type DisplayDish = {
  image_url: string;
  price: number;
  name: string;
  uuid: string;
  currency: string;
  hasFavorite: boolean,
  hasStar: boolean,
}

export type ClientMenuItemProps = {
  menuItem: {
    image_url: string;
    name: string;
    price: number;
    uuid: string;
    __typename: string;
    metadata?: { [key: string]: string }
  }
}