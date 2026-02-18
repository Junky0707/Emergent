import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    { text: 'Free shipping on orders over $75', link: '/pages/shipping' },
    { text: 'Subscribe & Save 15% on your favorite products', link: '/pages/subscribe' },
    { text: 'New: Luminous Serum now available', link: '/products/luminous-serum' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-[#2C3E30] text-[#FAFAF9] relative" role="banner" data-testid="announcement-bar">
      <div className="av-container py-2.5 flex items-center justify-center">
        <a 
          href={announcements[currentIndex].link}
          className="text-xs md:text-sm font-medium tracking-wide hover:underline underline-offset-4 transition-opacity animate-fade-in"
          key={currentIndex}
          data-testid="announcement-link"
        >
          {announcements[currentIndex].text}
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-[#3D5240] rounded-full transition-colors"
          aria-label="Close announcement"
          data-testid="close-announcement-btn"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
