/* eslint-disable @next/next/no-async-client-component */
// "use client";

// import useSWR from "swr";

const getUser = async () => {
  const data = await fetch("https://dummyjson.com/users");
  const json = await data.json();
  return json["users"];
};

const Dashboard = async () => {
  const userData = await getUser();
  console.log(userData);
  return (
    <div>
      <h1>Dashboard</h1>
      {userData.map((item, index) => {
        return <p key={index}>{item?.username}</p>;
      })}
    </div>
  );
};

export default Dashboard;
