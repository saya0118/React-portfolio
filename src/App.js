import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Works from './components/Works';
import Promises from './components/Promises';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Works/>
      <Main/>
      <Skills/>
      <Promises/>
      <Contact/>
    </div>
  );
}

export default App;
