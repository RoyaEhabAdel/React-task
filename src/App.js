
import './App.css';
import Bar from './components/Bar.tsx';
import Nav from './components/Nav.tsx';
import TopNav from './components/TopNav.tsx';
import Content from './components/Content.tsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Bar />
      <TopNav />
      <Content />
    </div>
  );
}

export default App;
