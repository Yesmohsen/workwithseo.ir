import { SearchCheck, FileSearch, LinkIcon, Settings, TrendingUp, FileBarChart, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: SearchCheck,
      title: 'تحقیق کلمات کلیدی',
      description: 'شناسایی فرصت‌های طلایی برای جذب ترافیک هدفمند',
      features: ['تحلیل رقبا', 'کلمات کلیدی Long-tail', 'شناخت Search Intent']
    },
    {
      icon: FileSearch,
      title: 'سئوی On-Page',
      description: 'بهینه‌سازی تمام عناصر داخلی وب‌سایت شما',
      features: ['تگ‌های متا', 'ساختار محتوا', 'لینک‌سازی داخلی']
    },
    {
      icon: LinkIcon,
      title: 'لینک‌سازی',
      description: 'افزایش اعتبار دامنه با استراتژی‌های کلاه سفید',
      features: ['رپورتاژ آگهی', 'لینک‌های پروفایلی', 'تحلیل بک‌لینک‌ها']
    },
    {
      icon: Settings,
      title: 'سئوی تکنیکال',
      description: 'زیرساخت فنی سالم برای ایندکس بهتر گوگل',
      features: ['سرعت سایت', 'Sitemap & Robots', 'اسکیما مارک‌آپ']
    },
    {
      icon: TrendingUp,
      title: 'استراتژی محتوا',
      description: 'نقشه راه محتوایی برای پوشش کامل موضوعات',
      features: ['تقویم محتوا', 'گپ محتوایی', 'آپدیت محتوای قدیمی']
    },
    {
      icon: FileBarChart,
      title: 'تحلیل و گزارش',
      description: 'رصد مداوم عملکرد و بهینه‌سازی مسیر',
      features: ['گزارش ماهانه', 'ترکینگ پوزیشن', 'تحلیل رفتار کاربر']
    }
  ];

  return (
    <section id="services" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider mb-2 block">خدمات من</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">چطور می‌توانم کمک کنم؟</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ارائه خدمات جامع سئو برای رشد پایدار کسب‌وکار شما در فضای آنلاین
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-muted border border-border rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed h-14">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
