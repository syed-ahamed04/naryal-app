
export enum CoconutType {
  TENDER = 'Tender (Malai)',
  MATURE = 'Mature (Brown)',
  HUSKED = 'Husked',
  DE_HUSKED = 'De-husked',
  ORGANIC = 'Organic Pollachi'
}

export enum CoconutSize {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  LARGE = 'Large',
  XL = 'Extra Large'
}

export enum OrderStatus {
  PENDING_PAYMENT = 'Pending Payment',
  PAID = 'Paid - Verification Required',
  VERIFIED = 'Verified',
  FAILED = 'Failed',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered'
}

export interface ProductVariant {
  size: CoconutSize;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  type: CoconutType;
  description: string;
  image: string;
  variants: ProductVariant[];
}

export interface CartItem {
  productId: string;
  type: CoconutType;
  size: CoconutSize;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  items: CartItem[];
  subtotal: number;
  gst: number;
  deliveryCharge: number;
  total: number;
  status: OrderStatus;
  createdAt: number;
  paymentScreenshot?: string;
}
