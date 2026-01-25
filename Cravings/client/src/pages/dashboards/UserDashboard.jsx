import React, { useState } from "react";

import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserTransactions from "../../components/userDashboard/userTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserSideBar from "../../components/userDashboard/userSideBar";
import UserOrders from "../../components/userDashboard/UserOrders";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border shadow rounde p-5 w-4xl mx-auto text-center bg-grey-100">
            <div>⊗</div>
            <div className="text-xl">
              You are not logged in as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${
            isCollapsed ? "w-2/60" : "w-12/60"
          }`}
        >
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={` ${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
          
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
