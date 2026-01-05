import { Search, MapPin, Briefcase, ArrowDown, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur-sm mb-8 hover:bg-muted transition-colors cursor-default"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-primary text-sm font-medium">آماده همکاری به صورت دورکاری</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
            محسن انتظاری
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-primary flex items-center gap-3">
            <Search className="w-6 h-6" />
            <span>متخصص جونیور سئو</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            کمک به دیده شدن کسب‌وکار شما در دنیای دیجیتال. با تمرکز بر 
            <span className="text-foreground font-medium mx-1">سئو تکنیکال</span>، 
            <span className="text-foreground font-medium mx-1">تحقیق کلمات کلیدی</span> و 
            <span className="text-foreground font-medium mx-1">استراتژی محتوا</span>.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#contact" 
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
          >
            <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            شروع همکاری
          </a>
          <a 
            href="#services" 
            className="group px-8 py-4 rounded-2xl font-semibold bg-muted/50 border border-border hover:bg-muted text-foreground transition-all flex items-center gap-2"
          >
            مشاهده خدمات
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats / Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: MapPin, text: "تهران، ایران" },
            { icon: Globe, text: "SEO Remote" },
            { icon: TrendingUp, text: "رشد ارگانیک" },
            { icon: Search, text: "تحلیل دقیق" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/30 border border-border text-muted-foreground text-sm hover:text-foreground transition-colors">
              <item.icon className="w-4 h-4" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
