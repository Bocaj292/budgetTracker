import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './view/Home';
import ViewAll from './view/ViewAll';
import OneTransaction from './components/OneTransaction';
import NewTransaction from './components/NewTransaction';
import EditTransaction from './components/EditTransaction';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/dash" element={<ViewAll/>}/>
          <Route path="/transaction/:id" element={<OneTransaction/>}/>
          <Route path="/new/transaction" element={<NewTransaction/>}/>
          <Route path="/edit/transaction/:id" element={<EditTransaction/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
