import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  //   CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
  //   CDBSidebarCTA,
} from "cdbreact";

const Sidebar = () => {
  return (
    <CDBSidebar textColor="white" backgroundColor="#222222">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Settings
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large" textFontSize="14px">
            Dashboard
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" textFontSize="14px">
            Update Security
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem
            icon="credit-card"
            iconType="solid"
            textFontSize="14px"
          >
            Update Profile
          </CDBSidebarMenuItem>
          {/* <CDBSidebarMenuItem
            icon="gamepad"
            iconType="solid"
            textFontSize="14px"
          >
            Fun and Games
          </CDBSidebarMenuItem> */}
        </CDBSidebarMenu>
        <CDBSidebarMenu>
          <div title="Store" icon="shopping-bag">
            <CDBSidebarMenuItem>Food </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>Clothes </CDBSidebarMenuItem>
            <div title="Accessories">
              <CDBSidebarMenuItem>Fitbit</CDBSidebarMenuItem>
              <CDBSidebarMenuItem>Cardio</CDBSidebarMenuItem>
              <div title="Tickets">
                <CDBSidebarMenuItem>Counselling</CDBSidebarMenuItem>
                <CDBSidebarMenuItem>Postnatal</CDBSidebarMenuItem>
                <CDBSidebarMenuItem>Yoga</CDBSidebarMenuItem>
              </div>
            </div>
          </div>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <div
        theme="overlay"
        // image={<Image />}
        text="Sign up Pro Here"
      ></div>
      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
