import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  BookOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DefaultLayout.css";
const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h1 className="text-center text-light">DD POS</h1>
        </div>
        <Menu
          defaultSelectedKeys={window.location.pathname}
          theme="dark"
          mode="inline"
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: "/bills",
              icon: <BookOutlined />,
              label: <Link to="/bills">Biils</Link>,
            },
            {
              key: "/items",
              icon: <UnorderedListOutlined />,
              label: <Link to="/items">Items</Link>,
            },
            {
              key: "/customers",
              icon: <UserOutlined />,
              label: <Link to="/customers">Customers</Link>,
            },
            ,
            {
              key: "/logout",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
        {/* <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/bills" icon={<BookOutlined />}>
            <Link to="/bills">Biils</Link>
          </Menu.Item>
          <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/items">Items</Link>
          </Menu.Item>
          <Menu.Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers">Customers</Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item> */}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
