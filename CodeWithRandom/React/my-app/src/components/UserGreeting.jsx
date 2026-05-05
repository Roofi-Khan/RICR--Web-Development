import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const UserGreeting = () => {
  const {username,setUsername} = useContext(GlobalContext);
  return (
   <div>
   {username}
   </div>
  )
}

export default UserGreeting






// import React from "react";

// const UserGreeting = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <div>Good Morning</div>;
//   }

//   return (
//     <div>
//       <h3>Please Sign IN</h3>
//     </div>
//   );
// };

// export default UserGreeting;
