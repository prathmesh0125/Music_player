import React, { useEffect } from "react";
import {  Link} from "react-router-dom";

// here we  distruct the arrray or to use props
// {title,menuobject}
function MenuList(props) {
  useEffect(() => {
    const allLi = document
      .querySelector(".menucontainer ul")
      .querySelectorAll("li");
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="menucontainer">
      <p className="title" style={{
            color: props.mode === "dark" ? "red" : "#c50dc2"}}>{props.title}</p>
      <ul>
        {props.menuobject &&
          props.menuobject.map((menu) => (
            <li key={menu.id} style={{color: props.mode === "dark" ? "black":"white",marginTop: props.isopen ? "5px" : "30px"}}>
              <Link to={menu.link}>
                <i> {menu.icon}</i>
                <span style={{color: props.mode === "dark" ? "black":"white"}}>{menu.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { MenuList };
