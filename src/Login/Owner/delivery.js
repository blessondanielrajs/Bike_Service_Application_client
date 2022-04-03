import React, { Component } from "react";
import {  Typography, Row, Col, Table, Button, Space,Switch, Tag } from "antd";
import {
    CheckOutlined, CloseOutlined
} from "@ant-design/icons";
import axios from "axios";
import config from '../../config';
const { Title } = Typography;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
        booking: ""

    }

    //funtion to display customer booking
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
    //functions to owner access a delete a customer booking
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
            <div className="fix">
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
