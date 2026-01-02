import { Search, MapPin, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center border-4 border-white/30 shadow-2xl">
              <Search className="w-16 h-16" />
            </div>
          </div>
          
          <h1 className="mb-4">محسن انتظاری</h1>
          <h2 className="mb-6 text-2xl text-emerald-200">متخصص جونیور سئو (SEO Junior)</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-emerald-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>تهران، ایران</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>آماده همکاری دورکاری</span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-100">
            به دنبال فرصت‌های شغلی در حوزه بهینه‌سازی موتورهای جستجو (SEO) هستم. با تجربه و دانش در زمینه سئو، آماده کمک به رشد آنلاین کسب‌وکار شما هستم.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors inline-block shadow-lg"
            >
              تماس با من
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-block"
            >
              خدمات من
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}