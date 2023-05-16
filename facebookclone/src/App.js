import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import { Home, NavBar, Friends, Shorts, Groups, Notification, Message } from "./components";
import { Posts, Stories, NewsFeed, Comments } from "./components/Home";
import { Messagerearch, OnlineChats, Chats, Inbox } from "./components/Message";
import { SideBar, FriendsList, FriendsReuest, Birthdays, FriendsHome } from './components/Friends';

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>

      <NavBar />
        <Routes>

             <Route path="" element={<Home />} >
                <Route path="/Posts" element={<Posts />}> </Route>
                <Route path="/Stories" element={<Stories />}> </Route>
                <Route path="NewsFeed" element={<NewsFeed />}> </Route>
                <Route path="/Comments" element={<Comments />}> </Route>
              </Route>  

              <Route path="/friends" element={<Friends />} >
                <Route path="SideBar" element={<SideBar />}> </Route>
                <Route path="FriendsHome" element={<FriendsHome />}> </Route>
                <Route path="FriendsList" element={<FriendsList />}> </Route>
                <Route path="FriendsRequest" element={<FriendsReuest />}> </Route>
                <Route path="Birthdays" element={<Birthdays />}> </Route>
              </Route>

              {/* <Route path="/friends" element={<Friends />} >
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/friendslist" element={<FriendsList />} />
            <Route path="/friendsrequest" element={<FriendsReuest />} />
            <Route path="/birthdays" element={<Birthdays />} />
          </Route> */}

              <Route path="shorts" element={<Shorts />} >

              </Route>

            <Route path="Message" element={<Message />} >
              <Route path="Messagersearch.js" element={<Messagerearch />}> </Route>
              <Route path="OnlineChats" element={<OnlineChats />}> </Route>
              <Route path="Chats" element={<Chats />}> </Route>
              <Route path="Inbox" element={<Inbox />}> </Route>
            </Route>

            <Route path="groups" element={<Groups />} >

            </Route>

            <Route path="notification" element={<Notification />} >

            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
