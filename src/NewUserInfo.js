import React, { useEffect, useState } from "react";

function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  const userChange=(event)=>{
    setUserId(event.target.value)
  }

  useEffect(() => {
    console.log("its running");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    return () => {
      console.log("clean up.");
    };
  }, [userId]);

  return (
    <div className="user">
      <h3>
        New User ID :
        <input type="text" value={userId} onChange={userChange} />
      </h3>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default NewUserInfo;
