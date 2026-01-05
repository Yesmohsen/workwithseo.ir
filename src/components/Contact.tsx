import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('پیام شما با موفقیت دریافت شد.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info (Right Side in RTL) */}
          <div>
            <span className="text-primary font-medium tracking-wider mb-2 block">تماس با من</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">بیایید صحبت کنیم</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              آیا پروژه‌ای در ذهن دارید یا می‌خواهید درباره سئو مشاوره بگیرید؟
              من همیشه آماده شنیدن ایده‌های شما هستم.
            </p>

            <div className="space-y-8">
              <a href="mailto:amoomosis@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">ایمیل</p>
                  <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">amoomosis@gmail.com</p>
                </div>
              </a>

              <a href="tel:+989054334465" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <Phone className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">تلفن</p>
                  <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors" dir="ltr">+98 905 433 4465</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">موقعیت</p>
                  <p className="text-lg text-foreground font-medium">تهران، ایران (Remote)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all text-muted-foreground"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (Left Side in RTL) */}
          <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-lg shadow-black/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">نام کامل</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder-muted-foreground/50"
                  placeholder="نام خود را وارد کنید"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">ایمیل</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder-muted-foreground/50"
                  placeholder="example@gmail.com"
                  dir="ltr"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">پیام</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground placeholder-muted-foreground/50 resize-none"
                  placeholder="پیام خود را بنویسید..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>ارسال پیام</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
