import { Target, TrendingUp, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">درباره من</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 leading-relaxed text-gray-300">
              من محسن انتظاری هستم، یک متخصص جونیور سئو با علاقه و اشتیاق فراوان در حوزه دیجیتال مارکتینگ و بهینه‌سازی موتورهای جستجو. هدف من کمک به کسب‌وکارها برای دستیابی به رتبه‌های بهتر در نتایج جستجو و افزایش ترافیک ارگانیک وب‌سایت است.
            </p>
            <p className="mb-6 leading-relaxed text-gray-300">
              با تسلط بر اصول و تکنیک‌های سئو، از جمله تحقیق کلمات کلیدی، بهینه‌سازی on-page و off-page، تحلیل رقبا و استراتژی محتوا، آماده‌ام تا در پروژه‌های شما مشارکت کنم و نتایج قابل اندازه‌گیری ارائه دهم.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="mb-2 text-white">هدف‌گرا و نتیجه‌محور</h3>
                <p className="text-gray-400">تمرکز بر دستیابی به نتایج ملموس و بهبود مستمر عملکرد سئو</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="mb-2 text-white">به‌روز و یادگیرنده</h3>
                <p className="text-gray-400">پیگیری مداوم آخرین تغییرات الگوریتم‌ها و روندهای سئو</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="mb-2 text-white">کار تیمی</h3>
                <p className="text-gray-400">توانایی همکاری موثر با تیم‌های مختلف و ارتباط شفاف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}