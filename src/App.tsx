import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ResearchSection from './sections/ResearchSection';
import PublicationsSection from './sections/PublicationsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

const App = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ResearchSection />
    <PublicationsSection />
    <ExperienceSection />
    <SkillsSection />
    <CertificationsSection />
    <ContactSection />
    <Footer />
  </Layout>
);

export default App;
