import React, { Component } from "react";
import { Typography, Row, Col, Table, Tag } from "antd";
import axios from "axios";
import config from '../../config';
const { Title } = Typography;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
        booking: ""

    }
    //function a display customer booking
    componentDidMount() {

        axios.post(config.serverurl + "/bike_service/owner/booking")
            .then(res => {

                this.setState({ booking: res.data.data });
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

        ];
        return (
            <div className="fix">
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
