import { Target, TrendingUp, Users, Brain, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header for consistency with other sections */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider mb-2 block">درباره من</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            مسیر حرفه‌ای من
            <span className="text-muted-foreground mr-2">در دنیای سئو</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            من محسن انتظاری هستم، متخصصی که باور دارد سئو ترکیبی از هنر و علم است. 
            هدف من کمک به دیده شدن واقعی کسب‌وکار شماست.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-2 bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              داستان من
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                به عنوان یک متخصص جونیور سئو، اشتیاق من فراتر از صرفاً رتبه‌بندی کلمات کلیدی است. 
                من به دنبال درک عمیق رفتار کاربران و الگوریتم‌های گوگل هستم تا بتوانم استراتژی‌هایی 
                پایدار و اثربخش خلق کنم.
              </p>
              <p>
                با تسلط بر اصول سئو و ابزارهای تحلیلی، من پل ارتباطی بین محتوای باکیفیت شما و 
                مخاطبانی هستم که به دنبال آن می‌گردند. هر پروژه برای من یک چالش جدید برای یادگیری 
                و رشد است.
              </p>
            </div>
          </div>

          {/* Stats/Traits Column */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 hover:bg-muted/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">نتیجه‌گرا</h4>
              <p className="text-muted-foreground text-sm">تمرکز بر KPIهای واقعی و رشد ترافیک ارگانیک</p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 hover:bg-muted/50 transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">یادگیرنده</h4>
              <p className="text-muted-foreground text-sm">همیشه در حال آپدیت دانش با آخرین الگوریتم‌ها</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
