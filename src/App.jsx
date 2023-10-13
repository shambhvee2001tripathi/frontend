// import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddHandicrafts from './Components/AddHandicrafts';
import Home from './Components/Home';
import { AppProvider } from './AppContext';
import BrowseHandicraft from './Components/BrowseHandicraft';
import ViewHandicraft from './Components/ViewHandicraft';

function App() {

return (
<div>
<BrowserRouter>
<AppProvider>
<Navbar/>
<Routes>
<Route path = './' element={ <Home />} />

<Route path = 'signUp' element={ <SignUp />} />
<Route path = 'login' element={ <Login />} />
<Route path = 'addhandicrafts' element={ <AddHandicrafts />} />
<Route path = 'browsehandicraft' element={ <BrowseHandicraft />} />
<Route path = 'viewhandicraft/:id' element={ <ViewHandicraft />} />



</Routes>
</AppProvider>
</BrowserRouter>

</div>
)
}
export default App;
