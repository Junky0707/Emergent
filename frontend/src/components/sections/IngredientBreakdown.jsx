import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info, Beaker, Leaf, Shield, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ingredients = [
  {
    id: 1,
    name: 'Vitamin C Complex',
    concentration: '15%',
    icon: Sparkles,
    category: 'Brightening',
    description: 'A stabilized form of L-ascorbic acid combined with ferulic acid for maximum absorption and efficacy.',
    benefits: [
      'Reduces hyperpigmentation',
      'Boosts collagen synthesis',
      'Protects against free radicals'
    ],
    clinicalStudy: 'Clinical studies show 40% improvement in skin brightness after 8 weeks.',
    source: 'Derived from organic citrus extracts'
  },
  {
    id: 2,
    name: 'Hyaluronic Acid',
    concentration: '2%',
    icon: Leaf,
    category: 'Hydration',
    description: 'Multi-molecular weight hyaluronic acid for deep and surface hydration.',
    benefits: [
      'Holds 1000x its weight in water',
      'Plumps fine lines',
      'Improves skin elasticity'
    ],
    clinicalStudy: '92% of users reported improved skin hydration in 4 weeks.',
    source: 'Bio-fermented, vegan-friendly'
  },
  {
    id: 3,
    name: 'Niacinamide',
    concentration: '5%',
    icon: Beaker,
    category: 'Repair',
    description: 'Vitamin B3 derivative that strengthens the skin barrier and reduces visible pores.',
    benefits: [
      'Minimizes pore appearance',
      'Regulates oil production',
      'Reduces inflammation'
    ],
    clinicalStudy: '64% reduction in visible pores after 12 weeks of consistent use.',
    source: 'Plant-derived, highly purified'
  },
  {
    id: 4,
    name: 'Adaptogenic Blend',
    concentration: '500mg',
    icon: Shield,
    category: 'Wellness',
    description: 'Proprietary blend of ashwagandha, rhodiola, and reishi mushroom extracts.',
    benefits: [
      'Reduces cortisol levels',
      'Supports stress response',
      'Enhances mental clarity'
    ],
    clinicalStudy: 'Studies show 23% reduction in perceived stress after 30 days.',
    source: 'Sustainably sourced from organic farms'
  }
];

const IngredientCard = ({ ingredient, isExpanded, onToggle }) => {
  const IconComponent = ingredient.icon;

  return (
    <motion.div 
      className="av-ingredient-card"
      layout
      data-testid={`ingredient-${ingredient.id}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
        aria-expanded={isExpanded}
        aria-controls={`ingredient-content-${ingredient.id}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2C3E30]/10 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-[#2C3E30]" strokeWidth={1.5} />
            </div>
            <div>
              <span className="av-mono text-[#A8522E] mb-1 block">{ingredient.category}</span>
              <h4 className="font-heading text-xl text-[#1C1917]">{ingredient.name}</h4>
              <span className="text-sm text-[#57534E] mt-1 block">{ingredient.concentration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:bg-[#F5F5F4] rounded-full transition-colors"
                    aria-label="More information"
                  >
                    <Info className="w-4 h-4 text-[#A8A29E]" strokeWidth={1.5} />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="text-sm">{ingredient.source}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <ChevronDown 
              className={`w-5 h-5 text-[#57534E] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`ingredient-content-${ingredient.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-[#E7E5E4]">
              <p className="text-[#57534E] mb-4">{ingredient.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xs font-medium uppercase tracking-wider text-[#A8A29E] mb-3">Key Benefits</h5>
                  <ul className="space-y-2">
                    {ingredient.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#1C1917]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E30] mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#F5F5F4] p-4 rounded-lg">
                  <h5 className="text-xs font-medium uppercase tracking-wider text-[#A8A29E] mb-2">Clinical Evidence</h5>
                  <p className="text-sm text-[#1C1917] font-medium">{ingredient.clinicalStudy}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const IngredientBreakdown = () => {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section className="av-section bg-[#FFFFFF]" data-testid="ingredient-breakdown">
      <div className="av-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="av-mono text-[#2C3E30] mb-4 block">Transparency</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917] mb-6">
              Know What's <span className="italic">Inside</span>
            </h2>
            <p className="text-[#57534E] text-lg mb-8 leading-relaxed">
              Every ingredient in our formulations is carefully selected for its proven efficacy. 
              We believe in complete transparency—tap each ingredient to learn more about its 
              science-backed benefits.
            </p>
            <div className="relative aspect-square max-w-md hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/7723282/pexels-photo-7723282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Scientific research and formulation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Ingredient List */}
          <div className="space-y-4">
            {ingredients.map((ingredient) => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isExpanded={expandedId === ingredient.id}
                onToggle={() => setExpandedId(expandedId === ingredient.id ? null : ingredient.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
