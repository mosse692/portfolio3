import './App.css';
import Header from './Components/header/Header';
import Page1 from './Components/page1/Page1';
import Page2 from './Components/page2/Page2';
import Page3 from './Components/page3/Page3';
import Page4 from './Components/page4/Page4';
// import video from '../src/videos/1.mp4'
function App() {
  return (
    <div className="App">
      {/* <video autoPlay loop muted playsInline>
        <source src={video}/>
      </video> */}
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  );
}

export default App;
