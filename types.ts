export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  sizes: number[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  cartId: string; // unique id for size+product combo
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
