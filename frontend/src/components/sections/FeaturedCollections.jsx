import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'supplements',
    title: 'Supplements',
    description: 'Clinical-grade formulations for daily wellness',
    image: 'https://images.unsplash.com/photo-1704662451911-198af41df592?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxzdXBwbGVtZW50JTIwYm90dGxlJTIwbWluaW1hbCUyMGNsaW5pY2FsJTIwZGVzaWduJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MTQxOTY1OHww&ixlib=rb-4.1.0&q=85',
    href: '/collections/supplements',
    productCount: 12
  },
  {
    id: 'skincare',
    title: 'Skincare',
    description: 'Targeted treatments for radiant skin',
    image: 'https://images.pexels.com/photos/7814990/pexels-photo-7814990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    href: '/collections/skincare',
    productCount: 8
  },
  {
    id: 'bundles',
    title: 'Bundles',
    description: 'Curated sets for complete routines',
    image: 'https://images.pexels.com/photos/8330042/pexels-photo-8330042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    href: '/collections/bundles',
    productCount: 5
  }
];

export const FeaturedCollections = () => {
  return (
    <section className="av-section bg-[#FAFAF9]" data-testid="featured-collections">
      <div className="av-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="av-mono text-[#2C3E30] mb-2 block">Shop By Category</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917]">
              Explore Our <span className="italic">Collections</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`collection-${collection.id}`}
            >
              <Link 
                to={collection.href}
                className="block group relative overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#F5F5F4]">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAFAF9]">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#A8A29E] mb-2 block">
                    {collection.productCount} Products
                  </span>
                  <h3 className="font-heading text-2xl mb-2">{collection.title}</h3>
                  <p className="text-sm text-[#D6D3D1] mb-4">{collection.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-[#FAFAF9] pb-1 group-hover:gap-3 transition-all">
                    Shop Now
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
