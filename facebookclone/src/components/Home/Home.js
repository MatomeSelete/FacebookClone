import React from 'react';

import { Posts, Stories, NewsFeed, Comments } from './index'

import './Home.css'

function Home() {
  return (
    <div className='home-post'>
           <Posts />
           <Stories />
           <NewsFeed />
    </div>
  )
}

export default Home





















// function Home() {
//   // let navigate = useNavigate();

//   // const [liked, setLiked] = useState(false);

//   // const handleNotification = ()=> {
//   //   setLiked(true)
//   // }

//   // const handleNotificationNot = ()=> {
//   //   setLiked(false)
//   // }
//   return (

//     <>
//       <div className='homeBody'>
//       {/* <Comments />
//           <Posts />
//           <Stories />
//           <NewsFeed /> */}
//           <h1>hellow</h1>
//       </div>
//     </>

//   )
// };

// export default Home

