import { Search, FileText, Link2, BarChart3, Code, Globe } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Search,
      title: 'تحقیق کلمات کلیدی',
      description: 'شناسایی و تحلیل بهترین کلمات کلیدی برای افزایش ترافیک ارگانیک',
      level: 85
    },
    {
      icon: FileText,
      title: 'بهینه‌سازی محتوا',
      description: 'تولید و بهینه‌سازی محتوای SEO-friendly برای رتبه‌بندی بهتر',
      level: 80
    },
    {
      icon: Link2,
      title: 'لینک‌سازی',
      description: 'ایجاد پروفایل بک‌لینک قوی و استراتژی‌های link building',
      level: 75
    },
    {
      icon: BarChart3,
      title: 'تحلیل و گزارش‌دهی',
      description: 'استفاده از Google Analytics و Search Console برای تحلیل داده‌ها',
      level: 90
    },
    {
      icon: Code,
      title: 'سئوی تکنیکال',
      description: 'بهینه‌سازی سرعت سایت، ساختار URL و schema markup',
      level: 70
    },
    {
      icon: Globe,
      title: 'سئوی محلی',
      description: 'بهینه‌سازی برای جستجوهای محلی و Google My Business',
      level: 75
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">مهارت‌های من</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مهارت‌ها و تخصص‌های من در حوزه سئو و دیجیتال مارکتینگ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="p-6 bg-gray-800 border border-gray-700 rounded-lg hover:shadow-2xl hover:border-emerald-500/50 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-white">{skill.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">سطح تسلط</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-900/30 to-indigo-900/30 rounded-lg border border-emerald-500/20">
          <h3 className="mb-4 text-center text-white">ابزارهای مورد استفاده</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Google Analytics',
              'Google Search Console',
              'Ahrefs',
              'SEMrush',
              'Screaming Frog',
              'Yoast SEO',
              'Google Keyword Planner',
              'Google Tag Manager',
              'Moz',
              'Ubersuggest'
            ].map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm shadow-sm border border-gray-700 text-gray-300 hover:border-emerald-500/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}