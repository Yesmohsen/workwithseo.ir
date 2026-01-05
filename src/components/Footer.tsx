import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black/20 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>© {currentYear} محسن انتظاری</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>طراحی و توسعه با</span>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500 animate-pulse" />
          <span>و React</span>
        </div>
      </div>
    </footer>
  );
}
