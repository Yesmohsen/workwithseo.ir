import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-0 z-[-2] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
