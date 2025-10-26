import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Music from '@/components/sections/Music';
import ContactForm from '@/components/forms/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <Music />
      <ContactForm />
    </main>
  );
}
