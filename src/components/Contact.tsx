import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در حالت واقعی، اینجا می‌توانید فرم را به سرور ارسال کنید
    alert('پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیرم.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">تماس با من</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            برای همکاری یا کسب اطلاعات بیشتر، می‌توانید از طریق فرم زیر یا اطلاعات تماس با من در ارتباط باشید
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-white">اطلاعات تماس</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-white">ایمیل</h4>
                  <a href="mailto:amoomosis@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    amoomosis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-white">تلفن</h4>
                  <a href="tel:+989054334465" className="text-gray-400 hover:text-emerald-400 transition-colors" dir="ltr">
                    +98 905 433 4465
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-white">موقعیت</h4>
                  <p className="text-gray-400">تهران، ایران</p>
                  <p className="text-sm text-gray-500 mt-1">آماده همکاری دورکاری</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="mb-4 text-white">شبکه‌های اجتماعی</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors text-gray-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors text-gray-400"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-colors text-gray-400"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-emerald-900/30 to-indigo-900/30 rounded-lg border border-emerald-500/30">
              <h4 className="mb-3 text-white">ساعات پاسخگویی</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                شنبه تا پنج‌شنبه: 9:00 صبح - 6:00 عصر (به وقت تهران)
              </p>
              <p className="text-gray-400 text-sm mt-2">
                معمولاً در کمتر از 24 ساعت پاسخ می‌دهم.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-300">
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="موضوع پیام خود را بنویسید"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none text-white placeholder-gray-500"
                  placeholder="پیام خود را اینجا بنویسید..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>ارسال پیام</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}