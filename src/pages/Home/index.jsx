import AboutMe from '../../components/AboutMe';
import Intro from '../../components/Intro';
import RecentWorks from '../../components/RecentWorks';
import Services from '../../components/Services';
import './Home.css';

const data = [
  {
    topic: 'Application AR mobile de calcul de distance réel',
    picture: '',
    domain: 'Augmented Reality',
    description: 'Lorem',
    technology : [
      {
        name:'Unity',
        picture : ''
      },
      {
        name:'C#',
        picture : ''
      },
    ]
  },
  {
    topic: 'Sentiment analysis',
    picture: '',
    domain: 'Machine Learning',
    description: 'Lorem',
    technology : [
      {
        name:'Python',
        logo : ''
      },
      {
        name:'Pandas',
        logo : ''
      },
      {
        name:'Numpy',
        logo : ''
      },
    ]
  },
  {
    topic: 'Recommandation automatique',
    picture: '',
    domain: 'Deep Learning',
    description: 'Lorem',
    technology : [
      {
        name:'Python',
        logo : ''
      },
      {
        name:'Flask',
        logo : ''
      },
      {
        name:'Numpy',
        logo : ''
      },
    ]
  }
]

function Home() {
  return (
    <main className="Home">
      <AboutMe/>
      <Services/>
      <RecentWorks works = {data}/>

      <footer className='n-footer'>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </footer>
    </main>
  );
}

export default Home;
