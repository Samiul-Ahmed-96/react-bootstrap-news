import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {
  const [news,setNews] = useState([])
  
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-09-27&sortBy=popularity&apiKey=b7f6a138b6b842208123ce42949f8dc9')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div className="App">
    <h3>Latest News</h3>
    <Row xs={1} md={4} className="g-4">
      {
        news.map(nw => <News news={nw}></News>)
      }
    </Row>

      
  </div>
  );
}

export default App;
