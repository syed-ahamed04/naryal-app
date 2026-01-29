
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Order, OrderStatus } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  role: 'customer' | 'admin';
  toggleRole: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('coconut_orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [role, setRole] = useState<'customer' | 'admin'>('customer');

  useEffect(() => {
    localStorage.setItem('coconut_orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === item.productId && i.size === item.size);
      if (existing) {
        return prev.map(i => 
          (i.productId === item.productId && i.size === item.size) 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart(prev => prev.filter(i => !(i.productId === productId && i.size === size)));
  };

  const clearCart = () => setCart([]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const toggleRole = () => setRole(prev => prev === 'customer' ? 'admin' : 'customer');

  return (
    <AppContext.Provider value={{ 
      cart, addToCart, removeFromCart, clearCart, 
      orders, addOrder, updateOrderStatus, 
      role, toggleRole 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
