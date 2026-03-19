import { Github, Twitter, Instagram, PlayCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-primary)] py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-text-primary)]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-8 h-8 text-[#8b9d83]" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8b9d83] to-[#f5cda1]">
              GhibliGlow
            </span>
          </div>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Music without boundaries. Experience a magical streaming platform tailored for you.
          </p>
        </div>
        
        <div>
          <h4 className="text-[var(--color-text-primary)] font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Web Player</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Mobile App</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Desktop App</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Plans & Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-text-primary)] font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-text-primary)] font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-[#8b9d83] transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[var(--color-text-primary)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-text-secondary)] text-sm">
          &copy; {new Date().getFullYear()} GhibliGlow. All rights reserved.
        </p>
        <div className="flex gap-4 text-[var(--color-text-secondary)]">
          <a href="#" className="hover:text-[#8b9d83] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#8b9d83] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#8b9d83] transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
