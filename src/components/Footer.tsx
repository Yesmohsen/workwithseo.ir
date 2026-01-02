import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-emerald-400">محسن انتظاری</h3>
            <p className="text-gray-400 leading-relaxed">
              متخصص جونیور سئو، آماده همکاری برای رشد دیجیتال کسب‌وکار شما
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">لینک‌های مفید</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  درباره من
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  خدمات
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  تماس با من
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">تخصص‌ها</h4>
            <ul className="space-y-2 text-gray-400">
              <li>تحقیق کلمات کلیدی</li>
              <li>سئوی On-Page</li>
              <li>لینک‌سازی</li>
              <li>تحلیل و گزارش‌دهی</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} محسن انتظاری. تمامی حقوق محفوظ است.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              ساخته شده با <Heart className="w-4 h-4 text-emerald-500 fill-current" /> در ایران
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}