import React from "react";
import { users } from "../fakeuser/fakeuser";
import { IoMdNotifications } from "react-icons/Io";
import { BsSearch } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <p>{users[0].username}</p>
        <img src={users[0].avatar} alt="" />
        <i>
          <IoMdNotifications />
        </i>
      </div>

      <div className="search-box">
        <input type="search" placeholder="Search" />
        <i>
          <BsSearch />
        </i>
      </div>
    </div>
  );
};

export default Header;
