import React from "react";

// Side bar in case mobile dev or smaller screen app is operable
const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className=""></div>
        </div>
        
      </section>
      RIGHT
    </aside>
  )
};

export default RightSideBar;
