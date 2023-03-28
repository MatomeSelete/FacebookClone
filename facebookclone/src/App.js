import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Home, NavBar, Friends, Shorts, Groups, Notification, Message,  Posts, Stories, NewsFeed } from './components'

import './App.css';


function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="friends" element={<Friends />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="message" element={<Message />} />
          <Route path="groups" element={<Groups />} />
          <Route path="notification" element={<Notification />} />
          {/* <Route path="comments" element={<Comments />} /> */}
          <Route path="posts" element={<Posts />} />
          <Route path="stories" element={<Stories />} />
          <Route path="news feed" element={<NewsFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
