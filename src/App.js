import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from "./ct.jpg"
import vid from './vid.mp4'
function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black" , maxWidth:'100vw'}}>
    <h1 className='title red' >Malak Nakaa</h1>
    <>
    <img className='image' src={myImage} alt ='myImage' />
    </>

    <img className='imag'  src="/c.jpg" alt="myimage" />
    </div>
  
   <div>
        <video className='myvid ' style={{ width: 320, height: 240 }} src={vid} type="video/mp4" controls />
      </div>
    </div>
  );
}

export default App;
