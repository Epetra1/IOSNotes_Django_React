
import './App.css';
import NoteLists from './pages/NoteLists'
import NoteItem from './pages/NoteItem'
import Header from './components/Header'
import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container dark">
      <div className='app'>

      
        <Header />
      <Routes>

        <Route path='/' element ={<NoteLists/>} />
        <Route path='/note/:id' element ={<NoteItem isNew={false}/>} />
        <Route path='/note/create/' element ={<NoteItem isNew={true}/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
