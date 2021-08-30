import React from 'react';
import 'antd/dist/antd.css';
import './SideBar.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FormOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import FormInputPayment from '../form/FormInputPayment'

const { Header, Sider, Content } = Layout;

class SiderBar extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Beranda
                </Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}>
                    Buat Payment Request
                </Menu.Item>

            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
                })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                <FormInputPayment />
            </Content>
            </Layout>
        </Layout>
        );
    }
}


export default SiderBar;