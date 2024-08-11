import React from "react";
import {
  ScheduleOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const menu = [
  { icon: UserAddOutlined, name: "Add New Worker", path: "/" },
  { icon: ScheduleOutlined, name: "Manage Workers", path: "all-workers" },
  { icon: LogoutOutlined, name: "Logout", path: "/" },
];

export const Home = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} breakpoint="lg" collapsedWidth="0">
        <div style={{ width: "100%", height: "64px", padding: "12px" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#333",
              borderRadius: "8px",
            }}
          ></div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={menu.map((item, index) => ({
            key: String(index + 1),
            icon: React.createElement(item.icon),
            label: item.name,
            onClick: () => navigate(item.path),
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingInline: 24,
            background: colorBgContainer,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Admin
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Worker Management System &copy; Isaac Shosanya
        </Footer>
      </Layout>
    </Layout>
  );
};
