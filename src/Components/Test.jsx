

// import React from "react";
// import './Test.css'
// const users = [
//        { name: 'User 1', image: 'user1.jpg' },
//        { name: 'User 2', image: 'user2.jpg' },
//        { name: 'User 3', image: 'user3.jpg' },
//        { name: 'User 4', image: 'user4.jpg' },
//        { name: 'User 5', image: 'user5.jpg' },
//        { name: 'User 6', image: 'user6.jpg' },
//        { name: 'User 7', image: 'user7.jpg' },
//        { name: 'User 8', image: 'user8.jpg' },
//        { name: 'User 9', image: 'user9.jpg' },
//        { name: 'User 10', image: 'user10.jpg' }
//      ];
// const Test = () => {
//   return (
//     <div className="card-container">
//       <div className="card">
//         <div className="card-heading">Select a User</div>
//         <div className="card-scroll" style={{ height: "500px", overflowY: "scroll" }}>
//         {users.map(user => (
//         <div className="card-user" key={user.name}>
//              <img src={user.image} alt={user.name} />
//              <p>{user.name}</p>        </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Test;

import React from "react";

const users = [
  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },
  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },
  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },
  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },
  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },

  {
    id: 1,
    name: "User 1",
    image: "user1.jpg"
  },
  {
    id: 2,
    name: "User 2",
    image: "user2.jpg"
  },
  // add more users here
];

const UserCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-heading">Select a User</div>
        <div className="card-scroll" style={{ height: "500px", overflowY: "scroll" }}>
          {users.map(user => (
            <div className="user" key={user.id}>
              <img src={user.image} alt={user.name} />
              <div className="user-name">{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;