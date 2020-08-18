/* eslint-disable react/prop-types */
import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {menus} from '../menuItems';
import selectedIcon from '../utils/selectedIcon';
import {connect} from 'react-redux';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Pages from '../App';
import ReactRedux from '../ReactRedux';
import {withRouter} from 'react-router-dom';
const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;
const keys = menus.map(c => ({
    key: c.key,
}));
class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        const openKeys = JSON.parse(window.localStorage.getItem('openKeys')) || [];
    }
    componentDidMount() {}
  state = {
      collapsed: false,
  };

  toggle = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
  };
  onSelectedKey = options => {
      this.setState({
          selectedKey: options.key,
      });
      const keyPath = options.keyPath[options.keyPath.length - 1];
      console.log(options);
      const menu = menus.find(m => m.key === keyPath);
      const subMenuPath =
      menu.items && menu.items.find(m => options.key === m.key);

      switch(options.key) {
          case subMenuPath.key:
              return this.props.history.push(subMenuPath.url);

          default:
              return '';
      }
  };
  onOpenChange = key => {
      console.log('openkeys:', key);
      window.localStorage.setItem('openKeys', JSON.stringify(key));
      this.setState({
          openKeys: key,
      });
  };
  render() {
      return (
          <Layout>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                  <div className="logo" />
                  <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={'dm2'}
                      defaultOpenKeys={this.state.openKeys}
                      onOpenChange={this.onOpenChange}
                      selectedKeys={this.state.selectedKey}
                      onClick={this.onSelectedKey}>
                      {menus.map(m => (
                          <SubMenu key={m.key} icon={selectedIcon(m.icon)} title={m.title}>
                              {m.items &&
                  m.items.map(c => (
                      <Menu.Item key={c.key}>{c.title}</Menu.Item>
                  ))}
                          </SubMenu>
                      ))}
                  </Menu>
              </Sider>
              <Layout className="site-layout">
                  <Header className="site-layout-background" style={{padding: 0}}>
                      {React.createElement(
                          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                          {
                              className: 'trigger',
                              onClick: this.toggle,
                          }
                      )}
                  </Header>
                  <Content
                      style={{
                          margin: '24px 16px',
                          padding: 24,
                          background: '#fff',
                          minHeight: 280,
                      }}>
                      <Pages />
                  </Content>
              </Layout>
          </Layout>
      );
  }
}
export default withRouter(connect(null, null)(MenuPage));
