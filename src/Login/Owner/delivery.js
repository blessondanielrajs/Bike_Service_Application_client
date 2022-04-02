import React, { Component } from "react";
import { Layout, Menu, Typography, Row, Col, Table, Empty, Select, Button, Space, Input, Checkbox, DatePicker, Switch, Tag } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DownloadOutlined,
    UploadOutlined,
    HomeOutlined,
    SearchOutlined,
    CheckOutlined, CloseOutlined
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
        booking: ""

    }
    componentDidMount() {

        axios.post(config.serverurl + "/bike_service/owner/booking")
            .then(res => {

                this.setState({ booking: res.data.data });



            })
    }

    switch = (record) => {
        console.log(record._id);
        let data = {
            "_id": record
        }
        axios.post(config.serverurl + "/bike_service/owner/delivery", data)
            .then(res => {
                if (res.data.status === 1) {
                    this.setState({ booking: res.data.data });
                }



            })
    }

    delete = (record) => {
        console.log(record._id);
        let data = {
            "_id": record
        }
        axios.post(config.serverurl + "/bike_service/owner/delete", data)
            .then(res => {
                if (res.data.status === 1) {
                    this.setState({ booking: res.data.data });
                }



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
                dataIndex: 'status',
                render: (text, record) => (
                    <div>
                        {parseInt(text) === 1 ? <Tag color="red">Pending</Tag>
                            : parseInt(text) === 2 ? <Tag color="green">Delivered</Tag>

                                : ""}
                    </div>
                ),


            },
            {
                title: 'Delete_Booking',

                render: (text, record) => (
                    <Space>
                        <Button type="primary" onClick={this.delete.bind(this, record)}>
                            Delete
                        </Button>
                    </Space>

                ),


            },
            {
                title: "Delivery Report",
                render: (text, record) => (


                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}

                        onChange={this.switch.bind(this, record)}

                        defaultChecked={(record.status === 2) ? true : false}
                        disabled={(record.status === 2) ? true : false}
                    />


                ),
            },



        ];
        return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col span={24}>
                        <Title level={2}>Booking Delivery</Title>
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
