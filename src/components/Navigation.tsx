import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Headphones, Search, Bell, User } from 'lucide-react';
import { clsx } from 'clsx';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Discover', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Premium', href: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b9d83] to-[#f5cda1] flex items-center justify-center">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8b9d83] to-[#f5cda1] blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Ghibli</span>
              <span className="text-[var(--color-text-primary)]">Glow</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b9d83] to-[#f5cda1] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-[var(--color-text-primary)]/5 transition-colors"
            >
              <Search className="w-5 h-5 text-[var(--color-text-secondary)]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-[var(--color-text-primary)]/5 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-[var(--color-text-secondary)]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#d9b8b0] rounded-full" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8b9d83] to-[#a3c1e2] p-0.5"
            >
              <div className="w-full h-full rounded-full bg-[var(--color-bg-primary)] flex items-center justify-center">
                <User className="w-4 h-4 text-[var(--color-text-primary)]" />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-text-primary)]/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-text-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-text-primary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 px-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-[var(--color-text-primary)]/10">
                <button className="flex-1 py-2 px-4 rounded-full bg-[var(--color-text-primary)]/5 hover:bg-[var(--color-text-primary)]/10 transition-colors text-sm font-medium text-[var(--color-text-primary)]">
                  Sign In
                </button>
                <button className="flex-1 py-2 px-4 rounded-full bg-gradient-to-r from-[#8b9d83] to-[#f5cda1] text-white text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
