import React, { Component } from "react";
import { Layout, Menu, Typography, Row, Col, Table, Empty, Select, Button, Space, Input, Checkbox, DatePicker, Tag } from "antd";
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
import moment from 'moment';

import momenttimezone from 'moment-timezone';
momenttimezone.tz.setDefault("Asia/Kolkata");
const dateFormatList = 'DD/MM/YYYY HH:mm:ss';
const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { Option } = Select;


class App extends Component {
    state = {
        collapsed: false,
        status: 0,
        booking_history: ""
    }

    componentDidMount() {
        let data = { _id: this.props.data._id }
        axios.post(config.serverurl + "/bike_service/customer/history", data)
            .then(res => {

                this.setState({ booking_history: res.data.data });
                console.log(res.data);


            })
    }

    render() {
        const columns = [
            {
                title: 'Date',

                key: 'key',
                render: (text, record) => (

                    <Space>  {moment.unix(record.BookDate).format(dateFormatList)}</Space>

                ),


            },
            {
                title: 'Status',
                dataIndex: 'status',
                render: (text, record) => (
                    <div>
                        {parseInt(text) === 1 ? <Tag color="red">Pending</Tag>
                            : parseInt(text) === 2 ? <Tag color="green">Delivered</Tag>

                                : ""}
                    </div>
                ),


            },


        ];

        console.log(this.props.data)
        return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col span={24}>
                        <Title level={2}>Booking History</Title>
                    </Col>
                    <Col span={24}>
                        <Table dataSource={this.state.booking_history} columns={columns} />
                    </Col>

                </Row>
            </div>
        );
    }
}

export default App;
