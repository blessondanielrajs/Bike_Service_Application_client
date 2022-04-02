import React, { Component } from "react";
import { Layout, Menu, Typography } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusOutlined,

    UploadOutlined,
    HomeOutlined

} from "@ant-design/icons";
import Home from "./home";
import Customer_Booking from "./customer_booking";
import Delivery from "./delivery";



const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    
    Home = () => {
        this.setState({
            status: 0,
        });
    };
    Booking = () => {
        this.setState({
            status: 1,
        });
    };

    Delivery = () => {
        this.setState({
            status: 2,
        });
    };
    render() {
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >
                            <Title style={{ color: "white" }} level={3}>Owner Portal</Title>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1" icon={<HomeOutlined />} onClick={this.Home}>
                                Home
                            </Menu.Item>
                           
                            <Menu.Item key="2" icon={<HomeOutlined />} onClick={this.Booking}>
                                Customer Booking
                            </Menu.Item>
                            <Menu.Item key="3" icon={<HomeOutlined />} onClick={this.Delivery}>
                                Booking Delivery
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(
                                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                {
                                    className: "trigger",
                                    onClick: this.toggle,
                                }
                            )}
                        </Header>

                        <Content
                            className="site-layout-background"
                            style={{
                                margin: "16px 16px",
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <div>
                                {this.state.status === 0 ? (
                                    <div>
                                        <Home data={this.props.data} />
                                    </div>



                                ) : this.state.status === 1 ? (
                                    <div>
                                        <Customer_Booking data={this.props.data} />
                                    </div>
                                ) :
                                        this.state.status === 2 ? (
                                            <div>
                                                <Delivery data={this.props.data} />
                                            </div>

                                   ): (




                                        <div>

                                        </div>
                                    )}
                            </div> 
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
