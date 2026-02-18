import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(prev + 5, 100));
    }
  };

  return (
    <section className="av-section bg-[#F5F5F4]" data-testid="before-after-section">
      <div className="av-container">
        <div className="text-center mb-12">
          <span className="av-mono text-[#2C3E30] mb-4 block">Results</span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917] mb-4">
            Real Results, <span className="italic">Real People</span>
          </h2>
          <p className="text-[#57534E] max-w-2xl mx-auto">
            See the visible difference our products make. These unretouched photos show 
            actual customer results after 8 weeks of consistent use.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="av-before-after aspect-[4/3] relative select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPosition}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            data-testid="before-after-slider"
          >
            {/* After Image (Background) */}
            <img
              src="https://images.pexels.com/photos/7592740/pexels-photo-7592740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="After using AURAVITA products"
              className="av-before-after-image"
              loading="lazy"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.pexels.com/photos/7723282/pexels-photo-7723282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Before using AURAVITA products"
                className="av-before-after-image"
                loading="lazy"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FAFAF9] cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAFAF9] rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-[#1C1917] rounded-full" />
                  <div className="w-0.5 h-4 bg-[#1C1917] rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-[#1C1917] text-[#FAFAF9] px-3 py-1.5 text-xs font-medium uppercase tracking-wider">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-[#2C3E30] text-[#FAFAF9] px-3 py-1.5 text-xs font-medium uppercase tracking-wider">
              After
            </div>
          </div>

          <p className="text-center text-xs text-[#A8A29E] mt-6">
            * Results may vary. Photos unretouched. User followed recommended usage for 8 weeks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
