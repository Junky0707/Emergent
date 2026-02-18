import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { Toaster } from "@/components/ui/sonner";

// Pages
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CollectionPage from "@/pages/CollectionPage";
import AboutPage from "@/pages/AboutPage";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AnnouncementBar } from "@/components/AnnouncementBar";

// Cart Context
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === product.variant);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      setIsCartOpen
    }}>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:handle" element={<ProductPage />} />
              <Route path="/collections/:handle" element={<CollectionPage />} />
              <Route path="/pages/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </div>
    </CartContext.Provider>
  );
}

export default App;
