import { SearchCheck, FileSearch, LinkIcon, Settings, TrendingUp, FileBarChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: SearchCheck,
      title: 'تحقیق و تحلیل کلمات کلیدی',
      description: 'شناسایی کلمات کلیدی با پتانسیل بالا، تحلیل حجم جستجو و رقابت، و ارائه استراتژی کلمات کلیدی مناسب برای کسب‌وکار شما',
      features: [
        'تحلیل کلمات کلیدی رقبا',
        'شناسایی long-tail keywords',
        'تحلیل search intent'
      ]
    },
    {
      icon: FileSearch,
      title: 'سئوی On-Page',
      description: 'بهینه‌سازی عناصر درون صفحه شامل تگ‌های title، meta description، هدینگ‌ها، و ساختار محتوا برای بهبود رتبه‌بندی',
      features: [
        'بهینه‌سازی تگ‌های HTML',
        'بهبود ساختار محتوا',
        'اضافه کردن schema markup'
      ]
    },
    {
      icon: LinkIcon,
      title: 'لینک‌سازی و سئوی Off-Page',
      description: 'ایجاد استراتژی لینک‌سازی، دریافت بک‌لینک با کیفیت از منابع معتبر و افزایش اعتبار دامنه شما',
      features: [
        'تحلیل پروفایل بک‌لینک',
        'استراتژی guest posting',
        'بررسی لینک‌های مضر'
      ]
    },
    {
      icon: Settings,
      title: 'سئوی تکنیکال',
      description: 'بهینه‌سازی سرعت سایت، رفع خطاهای crawl، بهبود mobile-friendliness و تنظیمات فنی وب‌سایت',
      features: [
        'بهینه‌سازی سرعت بارگذاری',
        'رفع خطاهای 404 و redirect',
        'بهبود Core Web Vitals'
      ]
    },
    {
      icon: TrendingUp,
      title: 'استراتژی محتوا',
      description: 'طراحی و اجرای استراتژی محتوایی SEO-driven برای جذب ترافیک هدفمند و افزایش تبدیل',
      features: [
        'برنامه‌ریزی تقویم محتوا',
        'بهینه‌سازی محتوای موجود',
        'ایجاد محتوای ارزشمند'
      ]
    },
    {
      icon: FileBarChart,
      title: 'تحلیل و گزارش‌دهی',
      description: 'ارائه گزارش‌های جامع از عملکرد سئو، تحلیل ترافیک، رتبه‌بندی کلمات کلیدی و ارائه پیشنهادات بهبود',
      features: [
        'گزارش ماهانه عملکرد',
        'تحلیل رفتار کاربران',
        'پیشنهادات بهینه‌سازی'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">خدمات من</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            خدمات سئو که می‌توانم برای رشد کسب‌وکار شما ارائه دهم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-700 hover:border-emerald-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-indigo-700 text-white p-10 rounded-2xl text-center shadow-2xl">
          <h3 className="mb-4">آماده شروع همکاری هستید؟</h3>
          <p className="mb-8 text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            اگر به دنبال یک متخصص سئو متعهد و حرفه‌ای برای رشد آنلاین کسب‌وکارتان هستید، خوشحال می‌شوم با شما همکاری کنم.
          </p>
          <a 
            href="#contact" 
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors inline-block shadow-lg"
          >
            همین حالا تماس بگیرید
          </a>
        </div>
      </div>
    </section>
  );
}