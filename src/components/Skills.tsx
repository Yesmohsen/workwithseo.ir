import { Search, FileText, Link2, BarChart3, Code, Globe, Cpu, Database } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Search,
      title: 'تحقیق کلمات کلیدی',
      description: 'استراتژی کلمات کلیدی',
      level: 85,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      icon: BarChart3,
      title: 'تحلیل داده',
      description: 'GSC & Analytics',
      level: 90,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      icon: FileText,
      title: 'سئو محتوا',
      description: 'بهینه‌سازی On-Page',
      level: 80,
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    {
      icon: Code,
      title: 'سئو تکنیکال',
      description: 'Core Web Vitals',
      level: 70,
      color: 'text-orange-400',
      bg: 'bg-orange-400/10'
    },
  ];

  const tools = [
    'Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 
    'Screaming Frog', 'Yoast SEO', 'Rank Math', 'Moz', 
    'Keyword Planner', 'Lighthouse', 'GTmetrix'
  ];

  return (
    <section id="skills" className="py-24 px-4 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider mb-2 block">جعبه ابزار من</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">مهارت‌ها و ابزارها</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ترکیبی از دانش فنی و ابزارهای تحلیلی برای رسیدن به بهترین نتایج
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-card backdrop-blur-sm border border-border p-6 rounded-3xl hover:bg-muted/50 transition-all group"
              >
                <div className={`w-14 h-14 ${skill.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`w-7 h-7 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{skill.description}</p>
                
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 right-0 h-full rounded-full transition-all duration-1000 ${skill.color.replace('text', 'bg')}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-xs font-mono text-muted-foreground">
                  {skill.level}% تسلط
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Cloud */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">ابزارهایی که استفاده می‌کنم</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-5 py-3 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default text-sm md:text-base"
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
