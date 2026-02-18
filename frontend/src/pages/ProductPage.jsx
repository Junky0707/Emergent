import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Heart, Share2, Minus, Plus, Check, 
  Truck, Shield, RefreshCw, Star, ChevronDown, Info
} from 'lucide-react';
import { useCart } from '@/App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

// Sample product data
const productsData = {
  'luminous-serum': {
    id: 'luminous-serum',
    title: 'Luminous Serum',
    subtitle: 'Brightening Complex',
    price: 68.00,
    comparePrice: 85.00,
    description: 'Our award-winning serum combines a potent 15% Vitamin C complex with ferulic acid and hyaluronic acid for visibly brighter, more even-toned skin. Clinically proven to reduce dark spots by 40% in 8 weeks.',
    images: [
      'https://images.pexels.com/photos/7814990/pexels-photo-7814990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/7723282/pexels-photo-7723282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/8330042/pexels-photo-8330042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
    variants: ['30ml', '50ml'],
    variantPrices: { '30ml': 68.00, '50ml': 98.00 },
    ingredients: 'Aqua, Ascorbic Acid, Ferulic Acid, Hyaluronic Acid, Vitamin E, Aloe Vera Extract',
    howToUse: 'Apply 3-4 drops to clean, dry skin in the morning. Follow with moisturizer and SPF.',
    rating: 4.9,
    reviewCount: 2847,
    inStock: true,
    stockCount: 24,
    badges: ['Bestseller', 'Award Winner'],
    benefits: [
      'Reduces dark spots & hyperpigmentation',
      'Boosts collagen production',
      'Protects against environmental damage',
      'Improves skin texture & radiance'
    ]
  },
  'vitality-capsules': {
    id: 'vitality-capsules',
    title: 'Vitality Capsules',
    subtitle: 'Energy & Focus',
    price: 54.00,
    description: 'A powerful adaptogenic blend designed to support natural energy levels, mental clarity, and stress resilience. Made with organic ashwagandha, rhodiola, and B-vitamins.',
    images: [
      'https://images.unsplash.com/photo-1704662451911-198af41df592?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxzdXBwbGVtZW50JTIwYm90dGxlJTIwbWluaW1hbCUyMGNsaW5pY2FsJTIwZGVzaWduJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MTQxOTY1OHww&ixlib=rb-4.1.0&q=85',
      'https://images.pexels.com/photos/8330042/pexels-photo-8330042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
    variants: ['30 Count', '60 Count', '90 Count'],
    variantPrices: { '30 Count': 54.00, '60 Count': 98.00, '90 Count': 132.00 },
    ingredients: 'Organic Ashwagandha Root Extract, Rhodiola Rosea, Vitamin B12, B6, Magnesium',
    howToUse: 'Take 2 capsules daily with food, preferably in the morning.',
    rating: 4.8,
    reviewCount: 1523,
    inStock: true,
    stockCount: 156,
    badges: ['New'],
    benefits: [
      'Sustained energy without jitters',
      'Enhanced mental clarity',
      'Reduced stress & cortisol levels',
      'Improved mood & motivation'
    ]
  }
};

const defaultProduct = productsData['luminous-serum'];

export default function ProductPage() {
  const { handle } = useParams();
  const product = productsData[handle] || defaultProduct;
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [showStickyATC, setShowStickyATC] = useState(false);
  
  const mainATCRef = useRef(null);

  const currentPrice = product.variantPrices?.[selectedVariant] || product.price;
  const subscriptionPrice = currentPrice * 0.85; // 15% off for subscription

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyATC(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (mainATCRef.current) {
      observer.observe(mainATCRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: isSubscription ? subscriptionPrice : currentPrice,
      image: product.images[0],
      variant: selectedVariant,
      subscription: isSubscription
    }, quantity);
    toast.success('Added to cart!');
  };

  return (
    <div data-testid="product-page">
      <div className="av-container py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[#57534E]">
            <li><Link to="/" className="hover:text-[#1C1917]">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections/all" className="hover:text-[#1C1917]">Shop</Link></li>
            <li>/</li>
            <li className="text-[#1C1917]">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="av-gallery">
            <motion.div 
              className="av-gallery-main"
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.images[selectedImage]}
                alt={`${product.title} - Image ${selectedImage + 1}`}
                loading="eager"
              />
            </motion.div>
            <div className="av-gallery-thumbs mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`av-gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                  aria-label={`View image ${index + 1}`}
                  data-testid={`gallery-thumb-${index}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Badges */}
            {product.badges && (
              <div className="flex gap-2 mb-4">
                {product.badges.map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-[#2C3E30] text-[#FAFAF9] text-xs font-medium uppercase tracking-wider">
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <span className="av-mono text-[#A8522E] mb-2 block">{product.subtitle}</span>
            <h1 className="font-heading text-3xl md:text-4xl text-[#1C1917] mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#E7E5E4]'}`}
                    strokeWidth={1.5}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-[#57534E]">{product.reviewCount.toLocaleString()} Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-medium text-[#1C1917]">
                ${isSubscription ? subscriptionPrice.toFixed(2) : currentPrice.toFixed(2)}
              </span>
              {product.comparePrice && !isSubscription && (
                <span className="text-lg text-[#A8A29E] line-through">${product.comparePrice.toFixed(2)}</span>
              )}
              {isSubscription && (
                <span className="text-sm text-[#2C3E30] font-medium">Save 15%</span>
              )}
            </div>

            <p className="text-[#57534E] mb-8 leading-relaxed">{product.description}</p>

            {/* Subscription Toggle */}
            <div className="mb-6">
              <div className="av-subscription-toggle">
                <button
                  onClick={() => setIsSubscription(false)}
                  className={`av-subscription-option ${!isSubscription ? 'active' : ''}`}
                  data-testid="one-time-purchase"
                >
                  One-time Purchase
                </button>
                <button
                  onClick={() => setIsSubscription(true)}
                  className={`av-subscription-option ${isSubscription ? 'active' : ''}`}
                  data-testid="subscribe-save"
                >
                  Subscribe & Save 15%
                </button>
              </div>
              {isSubscription && (
                <p className="text-xs text-[#57534E] mt-2">
                  Delivered every 30 days. Cancel anytime.
                </p>
              )}
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-[#1C1917] mb-3 block">Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border rounded-full text-sm transition-colors ${
                        selectedVariant === variant
                          ? 'border-[#1C1917] bg-[#1C1917] text-[#FAFAF9]'
                          : 'border-[#E7E5E4] text-[#1C1917] hover:border-[#1C1917]'
                      }`}
                      data-testid={`variant-${variant}`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div ref={mainATCRef} className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center border border-[#E7E5E4] rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F5F4] rounded-l-full transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-6 font-medium" aria-label="Quantity">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F5F4] rounded-r-full transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 av-btn-primary flex items-center justify-center gap-2"
                data-testid="add-to-cart-btn"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                Add to Cart
              </button>
              <button
                className="p-3 border border-[#E7E5E4] rounded-full hover:bg-[#F5F5F4] transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <div className="flex items-center gap-2 text-sm text-[#3F6212] mb-6">
                <Check className="w-4 h-4" strokeWidth={2} />
                <span>In Stock ({product.stockCount} available)</span>
              </div>
            ) : (
              <div className="text-sm text-[#991B1B] mb-6">Out of Stock</div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-[#E7E5E4] mb-6">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-5 h-5 text-[#2C3E30] mb-2" strokeWidth={1.5} />
                <span className="text-xs text-[#57534E]">Free Shipping $75+</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-5 h-5 text-[#2C3E30] mb-2" strokeWidth={1.5} />
                <span className="text-xs text-[#57534E]">30-Day Guarantee</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-5 h-5 text-[#2C3E30] mb-2" strokeWidth={1.5} />
                <span className="text-xs text-[#57534E]">Easy Returns</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#1C1917] mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#57534E]">
                    <Check className="w-4 h-4 text-[#2C3E30] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-sm font-medium">Ingredients</AccordionTrigger>
                <AccordionContent className="text-sm text-[#57534E]">
                  {product.ingredients}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-sm font-medium">How to Use</AccordionTrigger>
                <AccordionContent className="text-sm text-[#57534E]">
                  {product.howToUse}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-medium">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm text-[#57534E]">
                  Free standard shipping on orders over $75. Express shipping available. 
                  30-day money-back guarantee on all products.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Sticky ATC */}
      <AnimatePresence>
        {showStickyATC && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="av-sticky-atc visible"
            data-testid="sticky-atc"
          >
            <div className="av-container flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={product.images[0]} 
                  alt="" 
                  className="w-12 h-12 object-cover hidden sm:block"
                />
                <div>
                  <h4 className="font-medium text-sm text-[#1C1917]">{product.title}</h4>
                  <p className="text-sm text-[#57534E]">
                    ${isSubscription ? subscriptionPrice.toFixed(2) : currentPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="av-btn-primary whitespace-nowrap"
                data-testid="sticky-add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
