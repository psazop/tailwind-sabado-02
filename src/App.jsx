import jsonData from './assets/data/data.json';
import Container from './components/Container';
import SocialCard from './components/SocialCard';

const App = () => {

  return (
    <Container>
      <h1 className='text-2xl font-bold'>Social Media Dashboard</h1>
      <div className='flow-root mb-8'>
        <p className='text-xs font-light float-left'>Total Followers: 23,004</p>
        <p className='font-medium text-gray-600 float-right mb-2'>Dark Mode</p>
      </div>

      <SocialCard jsonData={jsonData} />
    </Container>
  );
}

export default App