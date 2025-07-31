'use client';
'use client'
import { useEffect, useState } from 'react';
import { ChevronsUp  } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-23 lg:bottom-6 right-6 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <ChevronsUp/>
      </button>
    )
  );
}

