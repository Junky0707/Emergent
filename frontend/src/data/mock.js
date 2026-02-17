// Mock data for Neem Dental Care website

export const clinicInfo = {
  name: "Neem Dental Care",
  address: "Shop No A-5, Jalaram Ashish CHS, Opposite Raj Hospital, Lala Devidayal Road, Mulund West, Mumbai – 400080",
  phone: "+91 98765 43210",
  email: "info@neemdentalcare.com",
  hours: {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4!2d72.9567!3d19.1740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzI2LjQiTiA3MsKwNTcnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Comprehensive dental check-ups, cleanings, and preventive care to maintain optimal oral health.",
    icon: "Stethoscope",
    benefits: ["Regular check-ups", "Cavity prevention", "Oral hygiene guidance"]
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and smile makeovers tailored to your needs.",
    icon: "Sparkles",
    benefits: ["Smile makeovers", "Veneers", "Teeth bonding"]
  },
  {
    id: 3,
    title: "Root Canal Treatment",
    description: "Painless endodontic procedures using advanced technology to save your natural teeth.",
    icon: "Shield",
    benefits: ["Painless procedure", "Save natural teeth", "Advanced technology"]
  },
  {
    id: 4,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel like natural teeth.",
    icon: "Wrench",
    benefits: ["Permanent solution", "Natural appearance", "Improved function"]
  },
  {
    id: 5,
    title: "Laser Dentistry",
    description: "Modern, minimally invasive treatments for gum care and various dental procedures.",
    icon: "Zap",
    benefits: ["Minimal discomfort", "Faster healing", "Precision treatment"]
  },
  {
    id: 6,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
    icon: "Star",
    benefits: ["Immediate results", "Safe & effective", "Long-lasting brightness"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent service! Dr. and the team made my root canal treatment completely painless. Highly recommended!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best dental clinic in Mulund! The staff is very professional and caring. My dental implant procedure was smooth and successful.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anita Desai",
    rating: 5,
    text: "Very clean and modern clinic. The dentist explained everything clearly and the teeth whitening results are amazing!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Patel",
    rating: 4,
    text: "Great experience overall. The laser dentistry treatment was quick and effective. Will definitely visit again.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Meera Iyer",
    rating: 5,
    text: "Wonderful clinic with state-of-the-art equipment. My cosmetic dentistry procedure exceeded expectations!",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Suresh Nair",
    rating: 5,
    text: "Professional and friendly staff. They take time to explain procedures and ensure you're comfortable throughout.",
    date: "3 weeks ago"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. Amit Malhotra",
    role: "Chief Dentist & Founder",
    qualification: "BDS, MDS (Prosthodontics)",
    experience: "15+ years",
    specialization: "Dental Implants, Cosmetic Dentistry",
    bio: "Dr. Amit brings over 15 years of expertise in advanced dental procedures, specializing in implantology and cosmetic transformations.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95"
  },
  {
    id: 2,
    name: "Dr. Sneha Reddy",
    role: "Endodontist",
    qualification: "BDS, MDS (Endodontics)",
    experience: "10+ years",
    specialization: "Root Canal Treatment, Laser Dentistry",
    bio: "Dr. Sneha specializes in painless root canal treatments using the latest laser technology and microscopic techniques.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce"
  },
  {
    id: 3,
    name: "Dr. Karan Singh",
    role: "Cosmetic Dentist",
    qualification: "BDS, PG Diploma (Aesthetic Dentistry)",
    experience: "8+ years",
    specialization: "Smile Makeovers, Teeth Whitening",
    bio: "Dr. Karan is passionate about creating beautiful smiles through advanced cosmetic procedures and personalized treatment plans.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    caption: "Modern Clinic Reception",
    category: "interior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1643660526741-094639fbe53a",
    caption: "State-of-the-art Dental Chair",
    category: "equipment"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
    caption: "Comfortable Treatment Room",
    category: "interior"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    caption: "Patient Consultation",
    category: "service"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce",
    caption: "Professional Dental Team",
    category: "team"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    caption: "Advanced Treatment Procedures",
    category: "service"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Benefits of Laser Dentistry: The Future of Dental Care",
    excerpt: "Discover how laser dentistry is revolutionizing dental treatments with minimal pain, faster healing, and precision results.",
    content: "Laser dentistry represents a breakthrough in modern dental care...",
    author: "Dr. Sneha Reddy",
    date: "2024-12-15",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99"
  },
  {
    id: 2,
    title: "How Often Should You Get a Dental Check-up?",
    excerpt: "Learn about the importance of regular dental visits and how they can prevent serious oral health issues.",
    content: "Regular dental check-ups are essential for maintaining optimal oral health...",
    author: "Dr. Amit Malhotra",
    date: "2024-12-10",
    category: "Preventive Care",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09"
  },
  {
    id: 3,
    title: "Top 5 Tips for Maintaining White Teeth",
    excerpt: "Simple daily habits and professional treatments that can help you maintain a bright, confident smile.",
    content: "A bright smile boosts confidence and leaves a lasting impression...",
    author: "Dr. Karan Singh",
    date: "2024-12-05",
    category: "Cosmetic",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787"
  },
  {
    id: 4,
    title: "Dental Implants vs Dentures: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you choose the best tooth replacement option for your needs.",
    content: "When it comes to replacing missing teeth, patients often face a choice...",
    author: "Dr. Amit Malhotra",
    date: "2024-11-28",
    category: "Restorative",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1643660526741-094639fbe53a"
  }
];

export const faqs = [
  {
    id: 1,
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every 6 months for regular check-ups and professional cleaning. However, if you have specific dental concerns or ongoing treatment, more frequent visits may be necessary."
  },
  {
    id: 2,
    question: "Are dental X-rays safe?",
    answer: "Yes, dental X-rays are very safe. Modern digital X-rays emit minimal radiation and are essential for diagnosing issues that aren't visible during a regular examination. We use lead aprons for additional protection."
  },
  {
    id: 3,
    question: "Is root canal treatment painful?",
    answer: "With modern technology and proper anesthesia, root canal treatment is virtually painless. At Neem Dental Care, we use advanced techniques and laser technology to ensure maximum comfort during the procedure."
  },
  {
    id: 4,
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. They typically have a success rate of over 95% and are considered the most durable tooth replacement option available."
  },
  {
    id: 5,
    question: "What is the difference between teeth whitening at the clinic vs. at home?",
    answer: "Professional in-clinic whitening provides immediate, dramatic results in a single session using higher concentration treatments. At-home kits take longer but can be more convenient. We offer both options based on your needs."
  },
  {
    id: 6,
    question: "Do you accept dental insurance?",
    answer: "We work with most major dental insurance providers. Please contact our office with your insurance details, and we'll verify your coverage and benefits before your appointment."
  },
  {
    id: 7,
    question: "What should I do in a dental emergency?",
    answer: "For dental emergencies such as severe pain, broken teeth, or knocked-out teeth, please call our clinic immediately. We prioritize emergency cases and will accommodate you as soon as possible."
  },
  {
    id: 8,
    question: "How can I prevent cavities?",
    answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit us regularly for check-ups and professional cleanings. We also offer preventive treatments like fluoride applications and dental sealants."
  }
];
