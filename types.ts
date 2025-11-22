
export interface Product {
  id: string;
  name: string;
  collection: string; // e.g., 'Minimalist Collection', 'Royal Heritage'
  price: number;
  description: string;
  details: string[];
  materials: string;
  weight: number; // in grams
  care: string;
  images: string[];
  category: string; // e.g., 'Rings', 'Earrings', 'Engagement Rings'
  tags: string[]; // e.g., 'gift-her', 'gift-him', 'anniversary', 'bestseller'
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export interface Address {
    id: string;
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    rt?: string;
    rw?: string;
    isDefault?: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  googleId?: string;
  avatar?: string;
  hasUsedWelcomeVoucher: boolean;
  addresses: Address[];
}

export interface Notification {
    id: string;
    type: 'success' | 'error' | 'warning';
    message: string;
}

export type Page = 'home' | 'jewelry' | 'collections' | 'engagement' | 'gifts' | 'product' | 'account' | 'checkout' | 'wishlist' | 'about' | 'info' | 'craftsmanship' | 'order-success' | 'order-tracking';

export type OrderStatus = 'confirmed' | 'preparing' | 'shipped' | 'out-for-delivery' | 'delivered';

export interface Order {
    id: string;
    userId?: string; // Link order to a user
    date: string;
    items: CartItem[];
    shipping: {
        method: string; 
        cost: number;
        address: {
            fullName: string;
            phone: string;
            address: string;
            city: string;
            state: string;
            country: string;
            zip: string;
            rt?: string;
            rw?: string;
        };
        trackingNumber?: string;
        courier?: string;
        estimatedDelivery?: string;
    };
    payment: {
        method: string;
        total: number;
        subtotal: number;
        tax: number;
        discount: number;
    };
    status: OrderStatus;
    timeline: {
        status: OrderStatus;
        date: string;
        title: string;
        description: string;
        completed: boolean;
    }[];
}