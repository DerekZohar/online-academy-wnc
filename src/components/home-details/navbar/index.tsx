import React, { useState } from "react";
import "./styles.css";
// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/logo.svg";
import SearchBar from "material-ui-search-bar";
import MenuListComposition from "./menus";
import AvatarUser from "./avatar";
import { Avatar, Button } from "@material-ui/core";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  // margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1854b4;
    color: #fff;
  }
`;

export default function Navbar({ isLogin }: { isLogin: boolean }) {
  // const [dataSrc, setDataSrc] = useState({
  //   dataSource: ["abc", "a", "abcdqwe"],
  // });
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
        <MenuListComposition />
      </NavLink>
      {/* <Bars /> */}
      <NavMenu>
        <SearchBar
          // onChange={(value) =>
          //   setDataSrc({
          //     dataSource: [value, value + value, value + value + value],
          //   })
          // }
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            width: 600,
            maxWidth: 800,
          }}
        />

        {!isLogin ? (
          <div className="sign-in-log-out">
            <Button href="/sign-out" color="primary">
              Sign Out
            </Button>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </div>
        ) : (
          <AvatarUser />
        )}
      </NavMenu>
    </Nav>
  );
}
