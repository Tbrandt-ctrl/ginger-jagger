import ShoppingBag from "@/components/icons/ShoppingBag";
import UserCircle from "@/components/icons/UserCircle";
import React from "react";

const Header = () => {
  const link_items = ["About", "Categories", "Accessories"];
  const icon_items = [
    { name: "profile", component: <UserCircle /> },
    { name: "basket", component: <ShoppingBag /> },
  ];

  return (
    <div className="header w-100 h-10 flex justify-between items-center p-7">
      <nav>
        <ul className="flex flex-row gap-3">
          {link_items.map((link) => {
            return <li className="font-bold">{link}</li>;
          })}
        </ul>
      </nav>

      <nav>
        <ul className="flex flex-row gap-3">
          {icon_items.map((icon) => {
            return <li>{icon.component}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
