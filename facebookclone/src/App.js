import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  NavBar,
  Friends,
  Shorts,
  Groups,
  Notification,
  Message,
} from "./components";
import { Posts, Stories, NewsFeed, Comments } from "./components/Home";
import { Messagerearch, OnlineChats, Chats, Inbox } from "./index";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/dash" element={<Navbar />}>
            {/* <Route path="pack" element={<Pack />}></Route>
              <Route path="form" element={<Form />}></Route>

              </Route> */}

            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} >
                <Route path="./components/Home/Posts.js" element={<Posts />}  > </Route>
                <Route path="./components/Home/Stories.js" element={<Stories />}  > </Route>
                <Route path="./components/Home/NewsFeed.js" element={<NewsFeed />}  > </Route>
                <Route path="./components/Home/Comments.js" element={<Comments />}  > </Route>
              </Route>  

              <Route path="/friends" element={<Friends />} >

              </Route>

              <Route path="shorts" element={<Shorts />} >

              </Route>

            <Route path="/message" element={<Message />} >
              <Route path="./components/Message/messagersearch.js" element={<Messagerearch />}  > </Route>
              <Route path="./components/Message/OnlineChats.js" element={<OnlineChats />}  > </Route>
              <Route path="./components/Message/chats.js" element={<Chats />}  > </Route>
              <Route path="./components/Message/Inbox.js" element={<Inbox />}  > </Route>
            </Route>

            <Route path="groups" element={<Groups />} >

            </Route>

            <Route path="notification" element={<Notification />} >

            </Route>

            

            

            

            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
