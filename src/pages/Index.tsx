import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import sarahPortrait from '@/assets/sarah-portrait.jpg';
import project1Before from '@/assets/project1-before.jpg';
import project1After from '@/assets/project1-after.jpg';
import project2Before from '@/assets/project2-before.jpg';
import project2After from '@/assets/project2-after.jpg';
import project3Before from '@/assets/project3-before.jpg';
import project3After from '@/assets/project3-after.jpg';

const projects = [
  {
    title: 'Fashion E-commerce Redesign',
    client: 'kheder-company.com',
    description: 'look how much its cool now after i redesigning it! it',
    beforeImage: project1Before,
    afterImage: project1After,
  },
  {
    title: 'Payment Dashboard',
    client: 'kheder-hospital.com',
    description: 'look how its cool now ',
    beforeImage: project2Before,
    afterImage: project2After,
  },
  {
    title: 'Payment Dashboard',
    client: 'kheder-hospital.com',
    description: 'look how its cool now ',
    beforeImage: project3Before,
    afterImage: project3After,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection heroImage={sarahPortrait} />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
