import AboutMe from '../../components/AboutMe';
import Intro from '../../components/Intro';
import RecentWorks from '../../components/RecentWorks';
import Services from '../../components/Services';
import './Home.css';

function Home() {
  return (
    <main className="Home">
      <Intro/>
      <AboutMe/>
      <Services/>
      <RecentWorks/>
      <footer className='n-footer'>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </footer>
    </main>
  );
}

export default Home;
