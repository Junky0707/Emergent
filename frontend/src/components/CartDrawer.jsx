import { X, Plus, Minus, Trash2, ShoppingBag, Truck, Percent } from 'lucide-react';
import { useCart } from '@/App';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  
  const freeShippingThreshold = 75;
  const shippingProgress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  const amountToFreeShipping = Math.max(freeShippingThreshold - cartTotal, 0);

  const upsellProduct = {
    id: 'upsell-1',
    title: 'Daily Wellness Drops',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1704662451911-198af41df592?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxzdXBwbGVtZW50JTIwYm90dGxlJTIwbWluaW1hbCUyMGNsaW5pY2FsJTIwZGVzaWduJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MTQxOTY1OHww&ixlib=rb-4.1.0&q=85',
    variant: 'default'
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-[#FAFAF9] p-0 flex flex-col" data-testid="cart-drawer">
        {/* Header */}
        <SheetHeader className="px-6 py-4 border-b border-[#E7E5E4]">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-heading text-lg">Your Cart</SheetTitle>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
              aria-label="Close cart"
              data-testid="close-cart-btn"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </SheetHeader>

        {/* Shipping Progress */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 bg-[#F5F5F4]">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-4 h-4 text-[#2C3E30]" strokeWidth={1.5} />
              {amountToFreeShipping > 0 ? (
                <span className="text-sm text-[#57534E]">
                  Add <strong className="text-[#1C1917]">${amountToFreeShipping.toFixed(2)}</strong> for free shipping
                </span>
              ) : (
                <span className="text-sm text-[#2C3E30] font-medium">
                  You've unlocked free shipping!
                </span>
              )}
            </div>
            <div className="av-progress-bar">
              <div 
                className="av-progress-bar-fill"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <ShoppingBag className="w-12 h-12 text-[#A8A29E] mb-4" strokeWidth={1} />
              <h3 className="font-heading text-xl mb-2">Your cart is empty</h3>
              <p className="text-sm text-[#57534E] mb-6">
                Discover our premium wellness products
              </p>
              <Link
                to="/collections/all"
                onClick={() => setIsCartOpen(false)}
                className="av-btn-primary"
                data-testid="continue-shopping-btn"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-4 border-b border-[#E7E5E4] last:border-0"
                  data-testid={`cart-item-${item.id}`}
                >
                  <div className="w-20 h-20 bg-[#F5F5F4] flex-shrink-0">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-[#1C1917] truncate">{item.title}</h4>
                    {item.variant !== 'default' && (
                      <p className="text-xs text-[#57534E] mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm text-[#1C1917] mt-1">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#E7E5E4] rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F5F4] rounded-l-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-sm" aria-label="Quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F5F4] rounded-r-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1.5 text-[#A8A29E] hover:text-[#991B1B] transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upsell */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t border-[#E7E5E4] bg-[#F5F5F4]">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-4 h-4 text-[#A8522E]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#1C1917]">Complete your routine</span>
            </div>
            <div className="flex gap-3 items-center bg-[#FFFFFF] p-3 rounded-lg border border-[#E7E5E4]">
              <div className="w-14 h-14 bg-[#F5F5F4] flex-shrink-0">
                <img 
                  src={upsellProduct.image}
                  alt={upsellProduct.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-medium text-[#1C1917]">{upsellProduct.title}</h5>
                <p className="text-sm text-[#57534E]">${upsellProduct.price.toFixed(2)}</p>
              </div>
              <button 
                className="text-xs font-medium text-[#2C3E30] hover:underline"
                data-testid="add-upsell-btn"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t border-[#E7E5E4] bg-[#FFFFFF]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#57534E]">Subtotal</span>
              <span className="text-lg font-medium text-[#1C1917]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#A8A29E] mb-4 text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button 
              className="w-full av-btn-primary"
              data-testid="checkout-btn"
            >
              Checkout
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
