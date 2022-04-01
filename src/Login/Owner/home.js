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
import axios from "axios";
import config from '../../config';
const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { Option } = Select;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
        booking:""
       
    }
    componentDidMount() {
       
        axios.post(config.serverurl + "/bike_service/owner/booking")
            .then(res => {

                this.setState({ booking: res.data.data});
              
             

            })
    }




    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'customer_name',
                key: 'key',

            },
            {
                title: 'Vechicle Name',
                dataIndex: 'vechicle_name',
                key: 'key',

            },
            {
                title: 'Vechicle Number',
                dataIndex: 'vechicle_number',
                key: 'key',

            },
            {
                title: 'phone Number',
                dataIndex: 'customer_ph_no',
                key: 'key',

            },
            {
                title: 'Email Id',
                dataIndex: 'customer_email',
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
                        <Table dataSource={this.state.booking} columns={columns} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
