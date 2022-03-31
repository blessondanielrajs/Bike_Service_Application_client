import React, { Component } from "react";
import { Layout, Menu, Typography, Row, Col, Table, Empty, Select, Button, Space, Input, Checkbox, DatePicker } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DownloadOutlined,
    UploadOutlined,
    HomeOutlined,
    SearchOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { Option } = Select;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
       
    }



    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'json',
                key: 'key',

            },
            {
                title: 'Vechicle Name',
                dataIndex: 'msg',
                key: 'key',

            },
            {
                title: 'Vechicle Number',
                dataIndex: 'msg',
                key: 'key',

            },
            {
                title: 'phone Number',
                dataIndex: 'msg',
                key: 'key',

            },
            {
                title: 'Email Id',
                dataIndex: 'msg',
                key: 'key',

            },
            {
                title: 'Status',
                dataIndex: 'msg',
                key: 'key',

            },

        ];
        return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col span={24}>
                        <Title level={2}>Booking History</Title>
                    </Col>
                    <Col span={24}>
                        <Table dataSource={this.state.data} columns={columns} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
