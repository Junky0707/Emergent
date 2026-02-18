import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { useCart } from '@/App';
import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
  {
    id: 'luminous-serum',
    title: 'Luminous Serum',
    subtitle: 'Brightening Complex',
    price: 68.00,
    comparePrice: 85.00,
    image: 'https://images.pexels.com/photos/7814990/pexels-photo-7814990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Bestseller',
    variant: 'default',
    href: '/products/luminous-serum'
  },
  {
    id: 'vitality-capsules',
    title: 'Vitality Capsules',
    subtitle: 'Energy & Focus',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1704662451911-198af41df592?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxzdXBwbGVtZW50JTIwYm90dGxlJTIwbWluaW1hbCUyMGNsaW5pY2FsJTIwZGVzaWduJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MTQxOTY1OHww&ixlib=rb-4.1.0&q=85',
    badge: 'New',
    variant: 'default',
    href: '/products/vitality-capsules'
  },
  {
    id: 'botanical-blend',
    title: 'Botanical Blend',
    subtitle: 'Stress Relief',
    price: 42.00,
    image: 'https://images.pexels.com/photos/8330042/pexels-photo-8330042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    variant: 'default',
    href: '/products/botanical-blend'
  },
  {
    id: 'renewal-cream',
    title: 'Renewal Cream',
    subtitle: 'Anti-Aging Complex',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1621806366061-442c3500deb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzcyUyMGluZ3JlZGllbnRzJTIwaGVyYnMlMjBib3RhbmljYWwlMjBtYWNybyUyMGRldGFpbHxlbnwwfHx8fDE3NzE0MTk2NjF8MA&ixlib=rb-4.1.0&q=85',
    badge: 'Limited',
    variant: 'default',
    href: '/products/renewal-cream'
  }
];

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="av-product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`product-card-${product.id}`}
    >
      <Link to={product.href} className="av-product-card-image">
        <img 
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        {product.badge && (
          <span className="av-product-card-badge">
            {product.badge}
          </span>
        )}
        
        {/* Quick Actions */}
        <div 
          className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...product });
            }}
            className="flex-1 bg-[#1C1917] text-[#FAFAF9] py-3 px-4 text-xs font-medium uppercase tracking-wider hover:bg-[#2C3E30] transition-colors flex items-center justify-center gap-2"
            aria-label={`Add ${product.title} to cart`}
            data-testid={`add-to-cart-${product.id}`}
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-[#FFFFFF] p-3 hover:bg-[#F5F5F4] transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4 text-[#1C1917]" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-[#FFFFFF] p-3 hover:bg-[#F5F5F4] transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4 text-[#1C1917]" strokeWidth={1.5} />
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <span className="av-mono mb-1 block">{product.subtitle}</span>
        <h3 className="font-heading text-lg text-[#1C1917] mb-2">
          <Link to={product.href} className="hover:text-[#2C3E30] transition-colors">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[#1C1917] font-medium">${product.price.toFixed(2)}</span>
          {product.comparePrice && (
            <span className="text-[#A8A29E] line-through text-sm">${product.comparePrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const FeaturedProducts = () => {
  return (
    <section className="av-section bg-[#FAFAF9]" data-testid="featured-products">
      <div className="av-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="av-mono text-[#2C3E30] mb-2 block">Our Collection</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917]">
              Curated for <span className="italic">You</span>
            </h2>
          </div>
          <Link 
            to="/collections/all"
            className="text-sm font-medium text-[#1C1917] hover:text-[#2C3E30] underline underline-offset-4 transition-colors"
            data-testid="view-all-products"
          >
            View All Products
          </Link>
        </div>

        <div className="av-grid-products">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
