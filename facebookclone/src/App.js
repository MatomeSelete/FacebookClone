
import 'bootstrap/dist/css/bootstrap.min.css';
import {FriendsPost, NavBar, Posts, Stories} from './components'

import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Posts />
     <Stories />
     <FriendsPost />
    </div>
  );
}

export default App;
