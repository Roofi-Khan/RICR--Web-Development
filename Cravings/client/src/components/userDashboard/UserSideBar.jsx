import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Line /> },
  ];

  return (
    <>
      <div className="p-2">
        <div className="text-xl font-bold h-10 flex items-center gap-5 mb-3">
          <button
            className="hover:scale-105 ms-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <RxHamburgerMenu />
          </button>{" "}
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap">User Dashboard</span>
          )}
        </div>
        <hr />

        <div className="py-6 space-y-5 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center px-2 text-lg rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {" "}
                {item.icon} 
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
      </div>
    </>
  );
};

export default UserSideBar;
