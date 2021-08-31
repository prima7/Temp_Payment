import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './SideBar.css';
import { Layout, Menu, Divider, Avatar, Card } from 'antd';
import {
    MenuOutlined,
    UserOutlined
} from '@ant-design/icons';
import { FaTachometerAlt, FaRegEdit } from "react-icons/fa";
import FormInputPayment from '../form/FormInputPayment';
import FooterPayment from './Footer'
import logo from '../../assets/logo.svg';

const { Header, Sider, Content, Footer } = Layout;

function SiderBar(){
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* menu sidebar */}
            <Sider style={{ boxShadow: "3px 4px 10px rgba(0, 0, 0, 0.25)" }}  theme="light" trigger={null} collapsible collapsed={collapsed}>
                
            {/* logo */}
            <Menu className="logo" theme="light">
                <Menu.Item icon={<img src={ logo } alt="logo" height={30} style={{marginLeft:"-5px" , float:"left"}}/>}>
                    Payment Monitoring
                </Menu.Item>
            </Menu>
            <Divider />

            {/* pilihan menu */}
            <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
                <Menu.Item key="1" icon={<FaTachometerAlt />}>
                    Beranda
                </Menu.Item>
                <Menu.Item key="2" icon={<FaRegEdit />}>
                    Payment Request
                </Menu.Item>
            </Menu>
            </Sider>

            {/* layout utama */}
            <Layout className="site-layout">

            {/* content header */}
            <Header className="site-layout-background" 
                style={{ 
                    padding: 0, 
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between" 
            }}>
                {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                className: 'trigger',
                onClick: toggle,
                })}

                <Avatar icon={<UserOutlined />} style={{ margin: "15px" }} />
            </Header>

            {/* content utama */}
            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                <h1 style={{ 
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    fontFamily: 'Roboto'
                    }}>Silahkan Isi Form Payment Request</h1>
                <Card style={{ minHeight: '70vh', boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)"}}>

                    {/* bagian penginputan form payment */}
                    <FormInputPayment />
                    
                </Card>,
            </Content>

            {/* content footer */}
            <Footer className="site-layout-background"><FooterPayment/></Footer>
            </Layout>
        </Layout>
    );
}


export default SiderBar;