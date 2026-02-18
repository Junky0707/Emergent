import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/App';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      label: 'Shop',
      href: '/collections/all',
      megaMenu: {
        categories: [
          {
            title: 'By Category',
            links: [
              { label: 'Supplements', href: '/collections/supplements' },
              { label: 'Skincare', href: '/collections/skincare' },
              { label: 'Self-Care', href: '/collections/self-care' },
              { label: 'Bundles', href: '/collections/bundles' },
            ]
          },
          {
            title: 'By Concern',
            links: [
              { label: 'Energy & Focus', href: '/collections/energy' },
              { label: 'Sleep & Relaxation', href: '/collections/sleep' },
              { label: 'Skin Health', href: '/collections/skin-health' },
              { label: 'Immunity', href: '/collections/immunity' },
            ]
          }
        ],
        featured: {
          image: 'https://images.pexels.com/photos/7814990/pexels-photo-7814990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'New Arrival',
          subtitle: 'Luminous Serum',
          href: '/products/luminous-serum'
        }
      }
    },
    { label: 'Science', href: '/pages/science' },
    { label: 'About', href: '/pages/about' },
    { label: 'Journal', href: '/blogs/journal' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E7E5E4]">
      <div className="av-container">
        <nav className="flex items-center justify-between h-16 md:h-20" role="navigation" aria-label="Main navigation">
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button 
                className="p-2 -ml-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
                aria-label="Open menu"
                data-testid="mobile-menu-btn"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-[#FAFAF9] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-[#E7E5E4]">
                  <Link to="/" className="font-heading text-xl tracking-wide" onClick={() => setMobileMenuOpen(false)}>
                    AURAVITA
                  </Link>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-[#F5F5F4] rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  {navigation.map((item) => (
                    <div key={item.label} className="mb-4">
                      <Link
                        to={item.href}
                        className="block py-3 text-lg font-medium text-[#1C1917] hover:text-[#2C3E30] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.megaMenu.categories.map((cat) => (
                            <div key={cat.title}>
                              <span className="text-xs font-medium text-[#A8A29E] uppercase tracking-wider">
                                {cat.title}
                              </span>
                              {cat.links.map((link) => (
                                <Link
                                  key={link.href}
                                  to={link.href}
                                  className="block py-2 text-[#57534E] hover:text-[#1C1917] transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link 
            to="/" 
            className="font-heading text-xl md:text-2xl tracking-wide text-[#1C1917] hover:text-[#2C3E30] transition-colors"
            data-testid="logo-link"
          >
            AURAVITA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setMegaMenuOpen(item.label)}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 py-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-4 h-4" strokeWidth={1.5} />}
                </Link>
                
                {/* Mega Menu */}
                {item.megaMenu && megaMenuOpen === item.label && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    role="menu"
                    aria-label={`${item.label} menu`}
                  >
                    <div className="bg-[#FFFFFF] border border-[#E7E5E4] shadow-xl rounded-xl p-8 min-w-[600px] grid grid-cols-3 gap-8 animate-fade-in">
                      {item.megaMenu.categories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="text-xs font-medium text-[#A8A29E] uppercase tracking-wider mb-4">
                            {cat.title}
                          </h4>
                          <ul className="space-y-3">
                            {cat.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  to={link.href}
                                  className="text-[#57534E] hover:text-[#1C1917] transition-colors"
                                  role="menuitem"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={item.megaMenu.featured.image}
                          alt={item.megaMenu.featured.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 to-transparent flex flex-col justify-end p-4">
                          <span className="text-xs text-[#E7E5E4] uppercase tracking-wider">
                            {item.megaMenu.featured.title}
                          </span>
                          <span className="text-white font-heading text-lg">
                            {item.megaMenu.featured.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button 
              className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
              aria-label="Search"
              data-testid="search-btn"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="hidden md:flex p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
              aria-label="Account"
              data-testid="account-btn"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="relative p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart with ${cartCount} items`}
              data-testid="cart-btn"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#2C3E30] text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
