import React, { useState, useEffect } from "react";
import { Header, Nav } from "./components";
import axios from "axios";

const User = ({ info }) => {
  return (
    <div>
      <p> name : {info.name} </p>
      <p> category : {info.category} </p>
      <p> comments 수 : {info.comments.length} </p>
      <p> createdAt : {info.createdAt} </p>
      <p> imageUrl : {info.imageUrl} </p>
      <p> onSale : {info.onSale} </p>
      <p> price : {info.price} </p>
      <p> sales : {info.sales} </p>
      <p> _id : {info._id} </p>
    </div>
  );
};

const App = () => {
  const defalutInfo = {
    category: "",
    comments: [],
    createdAt: "",
    imageUrl: "",
    name: "",
    onSale: false,
    price: 0,
    sales: 0,
    _id: "",
  };
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState(defalutInfo);
  const [loggedIn, setLoggedIn] = useState("로그인");
  const clickLoginBtn = async () => {
    // 로그인상태가 로그아웃 상태라면
    if (loggedIn === "로그인") {
      // api 요청을 보내고 setState 사용
      const res = await axios.get(`https://hugging.jinytree.shop/api/items/`);
      const data = res.data.bestItems[count];
      delete data.__v;
      setInfo((c) => {
        let newInfo = { ...c };
        newInfo = { ...data };
        return newInfo;
      });
      setLoggedIn("로그아웃");
      setCount((c) => c + 1);
    } else {
      // 로그인상태라면 로그아웃 ㄱㄱ
      setInfo((c) => {
        let newInfo = { ...c };
        newInfo = defalutInfo;
        return newInfo;
      });
      setLoggedIn("로그인");
    }
  };

  return (
    <div className="App">
      <button
        id="loginBtn"
        onClick={() => {
          clickLoginBtn();
        }}
      >
        {loggedIn}
      </button>
      <Header />
      <User info={info}></User>
      <Nav name={info.name} />
    </div>
  );
};

export default App;
