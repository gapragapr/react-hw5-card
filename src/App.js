import Card from './Components/Card/Card';
import './App.css';

function App() {
  const card = {
    title: 'Card title',
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    buttonContent: 'Go somewhere'
  }
  const cardImg = (
    <div className="card-img">
      <img src="https://images.drivereasy.com/wp-content/uploads/2017/08/img_598ea283c6fa9.png" alt="" />
    </div>
  )
  return (
   <Card {...card}>
    {cardImg}
   </Card>
  );
}

export default App;
