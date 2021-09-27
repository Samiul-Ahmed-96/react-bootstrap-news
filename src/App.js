import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
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
    <Container>
      <h2 className="my-5 fw-bold">Latest News</h2>
      {
        news.length === 0 ? <Spinner animation="grow" /> : <Row xs={1} md={4} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
      }

    </Container>

      
  </div>
  );
}

export default App;
