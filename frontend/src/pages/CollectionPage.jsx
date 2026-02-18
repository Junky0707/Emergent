import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, LayoutGrid, SlidersHorizontal, X, ChevronDown, ShoppingBag, Heart, Eye } from 'lucide-react';
import { useCart } from '@/App';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const allProducts = [
  {
    id: 'luminous-serum',
    title: 'Luminous Serum',
    subtitle: 'Brightening Complex',
    price: 68.00,
    comparePrice: 85.00,
    image: 'https://images.pexels.com/photos/7814990/pexels-photo-7814990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Bestseller',
    category: 'skincare',
    concern: ['brightening', 'anti-aging'],
    variant: 'default'
  },
  {
    id: 'vitality-capsules',
    title: 'Vitality Capsules',
    subtitle: 'Energy & Focus',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1704662451911-198af41df592?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxzdXBwbGVtZW50JTIwYm90dGxlJTIwbWluaW1hbCUyMGNsaW5pY2FsJTIwZGVzaWduJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MTQxOTY1OHww&ixlib=rb-4.1.0&q=85',
    badge: 'New',
    category: 'supplements',
    concern: ['energy', 'focus'],
    variant: 'default'
  },
  {
    id: 'botanical-blend',
    title: 'Botanical Blend',
    subtitle: 'Stress Relief',
    price: 42.00,
    image: 'https://images.pexels.com/photos/8330042/pexels-photo-8330042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'supplements',
    concern: ['stress', 'sleep'],
    variant: 'default'
  },
  {
    id: 'renewal-cream',
    title: 'Renewal Cream',
    subtitle: 'Anti-Aging Complex',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1621806366061-442c3500deb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzcyUyMGluZ3JlZGllbnRzJTIwaGVyYnMlMjBib3RhbmljYWwlMjBtYWNybyUyMGRldGFpbHxlbnwwfHx8fDE3NzE0MTk2NjF8MA&ixlib=rb-4.1.0&q=85',
    badge: 'Limited',
    category: 'skincare',
    concern: ['anti-aging', 'hydration'],
    variant: 'default'
  },
  {
    id: 'sleep-support',
    title: 'Sleep Support',
    subtitle: 'Rest & Recovery',
    price: 38.00,
    image: 'https://images.pexels.com/photos/7723282/pexels-photo-7723282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'supplements',
    concern: ['sleep', 'stress'],
    variant: 'default'
  },
  {
    id: 'hydra-mask',
    title: 'Hydra Mask',
    subtitle: 'Deep Moisture',
    price: 52.00,
    image: 'https://images.pexels.com/photos/7592740/pexels-photo-7592740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'skincare',
    concern: ['hydration'],
    variant: 'default'
  }
];

const collectionData = {
  all: { title: 'All Products', description: 'Explore our complete collection of premium wellness products.' },
  supplements: { title: 'Supplements', description: 'Clinical-grade formulations for daily wellness and vitality.' },
  skincare: { title: 'Skincare', description: 'Targeted treatments for radiant, healthy skin.' },
  bundles: { title: 'Bundles', description: 'Curated sets for complete wellness routines.' },
};

const filterOptions = {
  category: ['Supplements', 'Skincare'],
  concern: ['Energy', 'Focus', 'Sleep', 'Stress', 'Brightening', 'Anti-Aging', 'Hydration'],
  price: ['Under $50', '$50 - $75', '$75+']
};

export default function CollectionPage() {
  const { handle } = useParams();
  const collection = collectionData[handle] || collectionData.all;
  const { addToCart } = useCart();
  
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(3);
  const [filters, setFilters] = useState({ category: [], concern: [], price: [] });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on collection and active filters
  let filteredProducts = allProducts;
  
  if (handle && handle !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === handle);
  }

  if (filters.category.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      filters.category.some(c => c.toLowerCase() === p.category)
    );
  }

  if (filters.concern.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      filters.concern.some(c => p.concern?.includes(c.toLowerCase()))
    );
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].filter(p => p.badge === 'New').concat(
      filteredProducts.filter(p => p.badge !== 'New')
    );
  }

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const clearFilters = () => {
    setFilters({ category: [], concern: [], price: [] });
  };

  const activeFilterCount = Object.values(filters).flat().length;

  return (
    <div data-testid="collection-page">
      {/* Hero */}
      <div className="bg-[#F5F5F4] py-16 md:py-24">
        <div className="av-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-[#1C1917] mb-4"
          >
            {collection.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#57534E] max-w-xl mx-auto"
          >
            {collection.description}
          </motion.p>
        </div>
      </div>

      <div className="av-container py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E7E5E4]">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-[#E7E5E4] rounded-full hover:bg-[#F5F5F4] transition-colors lg:hidden"
                  data-testid="mobile-filter-btn"
                >
                  <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 bg-[#2C3E30] text-[#FAFAF9] text-xs rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm bg-[#FAFAF9]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  {Object.entries(filterOptions).map(([key, values]) => (
                    <div key={key}>
                      <h4 className="text-sm font-medium text-[#1C1917] capitalize mb-3">{key}</h4>
                      <div className="space-y-2">
                        {values.map((value) => (
                          <label key={value} className="flex items-center gap-3 cursor-pointer">
                            <Checkbox
                              checked={filters[key].includes(value)}
                              onCheckedChange={() => toggleFilter(key, value)}
                            />
                            <span className="text-sm text-[#57534E]">{value}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-[#A8522E] hover:underline"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <span className="text-sm text-[#57534E]">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 border-[#E7E5E4]" data-testid="sort-select">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Grid Toggle */}
            <div className="hidden md:flex items-center border border-[#E7E5E4] rounded-full overflow-hidden">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 ${gridCols === 3 ? 'bg-[#F5F5F4]' : ''}`}
                aria-label="3 column grid"
              >
                <Grid3X3 className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 ${gridCols === 4 ? 'bg-[#F5F5F4]' : ''}`}
                aria-label="4 column grid"
              >
                <LayoutGrid className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <h3 className="font-medium text-[#1C1917]">Filters</h3>
              
              {Object.entries(filterOptions).map(([key, values]) => (
                <div key={key}>
                  <h4 className="text-sm font-medium text-[#1C1917] capitalize mb-3">{key}</h4>
                  <div className="space-y-2">
                    {values.map((value) => (
                      <label key={value} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={filters[key].includes(value)}
                          onCheckedChange={() => toggleFilter(key, value)}
                          data-testid={`filter-${key}-${value.toLowerCase()}`}
                        />
                        <span className="text-sm text-[#57534E]">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#A8522E] hover:underline"
                  data-testid="clear-filters"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#57534E] mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="av-btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid grid-cols-2 ${gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-4 md:gap-6`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} addToCart={addToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ product, index, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="av-product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`collection-product-${product.id}`}
    >
      <Link to={`/products/${product.id}`} className="av-product-card-image">
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
            className="flex-1 bg-[#1C1917] text-[#FAFAF9] py-2 px-3 text-xs font-medium uppercase tracking-wider hover:bg-[#2C3E30] transition-colors flex items-center justify-center gap-1"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingBag className="w-3 h-3" strokeWidth={1.5} />
            Add
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-[#FFFFFF] p-2 hover:bg-[#F5F5F4] transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4 text-[#1C1917]" strokeWidth={1.5} />
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <span className="av-mono mb-1 block text-xs">{product.subtitle}</span>
        <h3 className="font-heading text-base text-[#1C1917] mb-1">
          <Link to={`/products/${product.id}`} className="hover:text-[#2C3E30] transition-colors">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[#1C1917] text-sm font-medium">${product.price.toFixed(2)}</span>
          {product.comparePrice && (
            <span className="text-[#A8A29E] line-through text-xs">${product.comparePrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
