import React, { Component } from "react";
import { Layout, Menu, Typography } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    DatabaseTwoTone
} from "@ant-design/icons";
import Home from "./home";
import History from "./history";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

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

    History = () => {
        this.setState({
            status: 1,
        });
    };
//render a page to path
    render() {
        return (
            <div className="fix">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >
                            <Title style={{ color: "white" }} level={3}>Customer Portal</Title>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1" icon={<HomeOutlined />} onClick={this.Home}>
                                Home
                            </Menu.Item>

                            <Menu.Item key="2" icon={<DatabaseTwoTone />} onClick={this.History}>
                                Booking History
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
                                        <History data={this.props.data} />
                                    </div>
                                ) :
                                    (
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
