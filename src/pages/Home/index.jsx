import AboutMe from '../../components/AboutMe';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import RecentWorks from '../../components/RecentWorks';
import Services from '../../components/Services';
import portfolioData from '../../data/portfolio.json';
import './Home.css';

function Home() {
  const { projects, personalInfo } = portfolioData;
  
  // Transform projects data to match existing component structure
  const workData = projects.map(project => ({
    topic: project.title,
    picture: project.image,
    domains: project.category,
    description: project.description,
    technologies: project.technologies.map(tech => ({
      name: tech.name,
      picture: tech.icon,
      logo: tech.icon
    }))
  }));

  return (
    <div className="Home">
      <Banner />
      <main>
        <AboutMe/>
        <RecentWorks works={workData}/>
        <Services/>
      </main>
      <section id="contact-me" className='py-16 px-4 md:px-10 bg-gradient-to-br from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='animate-fadeInUp'>
            <span className='text-[#2a9df4ff] font-semibold text-sm uppercase tracking-wider mb-2 block'>Contact</span>
            <h2 className='text-white text-4xl md:text-5xl font-bold mb-6'>
              Let's Work Together
            </h2>
            <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
              Have a project in mind? Let's discuss how I can help bring it to life.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-8'>
              <a 
                href={`mailto:${personalInfo.socialLinks.email}`}
                className='bg-[#2a9df4ff] hover:bg-[#1e7bb8] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover-lift'
              >
                📧 Send Email
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className='border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300'
              >
                💼 LinkedIn
              </a>
            </div>
            
            <div className='flex justify-center mb-12'>
              <a 
                href={personalInfo.cvPath}
                download="Lionel_Kambdetey_Resume.pdf"
                className='text-[#2a9df4ff] hover:text-white border border-[#2a9df4ff] hover:bg-[#2a9df4ff] font-medium py-2 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2'
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download My Resume
              </a>
            </div>
            
            <div className='flex justify-center gap-6'>
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-[#2a9df4ff] transition-colors text-2xl'>
                <i className="fab fa-github"></i>
              </a>
              <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-[#2a9df4ff] transition-colors text-2xl'>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className='bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-800'>
        <div className='max-w-6xl mx-auto text-center'>
          <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
