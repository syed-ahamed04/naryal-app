
import { CoconutType, CoconutSize, Product } from './types';

export const MERCHANT_UPI_ID = 'coconutstore@upi';
export const MERCHANT_NAME = 'Nariyal Fresh Foods';
export const GST_RATE = 0.05; // 5% GST for agri-products
export const MIN_ORDER_VALUE = 200;
export const DELIVERY_THRESHOLD = 500;
export const STANDARD_DELIVERY_FEE = 40;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    type: CoconutType.TENDER,
    description: 'Refreshing water and soft malai. Perfect for post-workout hydration.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&q=80&w=400',
    variants: [
      { size: CoconutSize.MEDIUM, price: 65, stock: 150 },
      { size: CoconutSize.LARGE, price: 85, stock: 80 }
    ]
  },
  {
    id: '2',
    type: CoconutType.MATURE,
    description: 'High oil content and thick kernel. Ideal for cooking and coconut milk.',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=400',
    variants: [
      { size: CoconutSize.SMALL, price: 35, stock: 200 },
      { size: CoconutSize.MEDIUM, price: 45, stock: 120 },
      { size: CoconutSize.LARGE, price: 55, stock: 90 }
    ]
  },
  {
    id: '3',
    type: CoconutType.HUSKED,
    description: 'Partially husked for easy opening. Long shelf life.',
    image: 'https://images.unsplash.com/photo-1552590635-27c2c2128b15?auto=format&fit=crop&q=80&w=400',
    variants: [
      { size: CoconutSize.MEDIUM, price: 50, stock: 300 },
      { size: CoconutSize.XL, price: 75, stock: 45 }
    ]
  },
  {
    id: '4',
    type: CoconutType.ORGANIC,
    description: 'Premium organic coconuts from Pollachi, TN. Naturally sweet.',
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=400',
    variants: [
      { size: CoconutSize.MEDIUM, price: 120, stock: 50 },
      { size: CoconutSize.LARGE, price: 150, stock: 20 }
    ]
  }
];
