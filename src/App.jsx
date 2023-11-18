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
import { AnimatePresence } from 'framer-motion';
import ManageHandicrafts from './Components/ManageHandicrafts';
import UpdateHandicraft from './Components/UpdateHandicraft';


function App() {

return (
<div>
<BrowserRouter>
<AppProvider>
   <AnimatePresence>
<Navbar/>
<Routes>
<Route path = '/' element={ <Home />} />

<Route path = 'signUp' element={ <SignUp />} />
<Route path = 'login' element={ <Login />} />
<Route path = 'addhandicrafts' element={ <AddHandicrafts />} />
<Route path = 'browsehandicraft' element={ <BrowseHandicraft />} />
<Route path = 'managehandicrafts' element={ <ManageHandicrafts />} />
<Route path = 'updatehandicraft/:id' element={ <UpdateHandicraft />} />


<Route path = 'viewhandicraft/:id' element={ <ViewHandicraft />} />



</Routes>
</AnimatePresence>
</AppProvider>
</BrowserRouter>

</div>
)
}
export default App;
