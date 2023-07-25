import './App.css'
import Body from './components/Body';
import Header from './components/Header'
import Lofi from './assets/lofi.webp'

function App() {

  return (
    <>
      <Header profile={Lofi}
              artist="a girl and a cat"
              listeners="661,250"/>
      <Body />
    </>
  )
}

export default App;
