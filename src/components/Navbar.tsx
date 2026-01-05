import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'درباره من', href: '#about' },
    { name: 'مهارت‌ها', href: '#skills' },
    { name: 'خدمات', href: '#services' },
    { name: 'تماس', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className={`mx-auto transition-all duration-300 rounded-2xl border ${
              scrolled 
                ? 'bg-background/80 backdrop-blur-md border-border shadow-lg shadow-black/5 py-2 px-6' 
                : 'bg-transparent border-transparent py-2 px-0'
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  محسن انتظاری
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/50">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <a 
                  href="#contact" 
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 text-sm"
                >
                  همکاری با من
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors bg-muted rounded-lg border border-border"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[80px] z-40 p-4 md:hidden"
          >
            <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 overflow-hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-border my-2" />
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="p-4 text-center rounded-xl bg-primary/20 text-primary hover:bg-primary/30 transition-all font-bold"
                >
                  همکاری با من
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
