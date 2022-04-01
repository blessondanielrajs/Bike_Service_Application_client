import React, { Component } from "react";
import { Layout, Menu, Typography, Row, Col, Table, Empty, Select, Button, Space, Input, Checkbox, DatePicker, message } from "antd";
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
        vechicle_name: "",
        vechicle_model: "",
        vechicle_number: "",
        services: "",
        BookDate: ""

    }

    onChangeInputBox1 = (e) => {
        this.setState({ vechicle_name: e.target.value });

    };

    onChangeInputBox2 = (e) => {
        this.setState({ vechicle_model: e.target.value });

    };

    onChangeInputBox3 = (e) => {
        this.setState({ vechicle_number: e.target.value });

    };



    onOk1 = (value) => {
        var i = (moment(value).unix());
        //console.log(i);
        this.setState({ BookDate: i })
        // console.log(moment.unix(i).format(dateFormatList))
    }


    Book = () => {
        let flag = 0;
        if (this.state.vechicle_name === "") {
            message.error("Enter Vechicle Name ");
            flag = 1;
            return false;
        }
        else if (this.state.vechicle_model === "") {
            message.error("Enter Vechicle Model ");
            flag = 1;
            return false;
        }
        else if (this.state.vechicle_number === "") {
            message.error("Enter Vechicle Number Date");
            flag = 1;
            return false;
        }
        else if (this.state.services === "") {
            message.error("Select Services");
            flag = 1;
            return false;
        }
        else if (this.state.BookDate === "") {
            message.error("Enter BookDate");
            flag = 1;
            return false;
        }

        else if (flag === 0) {

            let data = {
                customer_id: this.props.data._id,
                customer_name: this.props.data.name,
                customer_ph_no: this.props.data.ph_no,
                customer_email: this.props.data.email,
                customer_place: this.props.data.place,
                vechicle_name: this.state.vechicle_name,
                vechicle_model: this.state.vechicle_model,
                vechicle_number: this.state.vechicle_number,
                services: this.state.services,
                BookDate: this.state.BookDate
            }
            console.log(data)
            axios.post(config.serverurl + "/bike_service/customer/booking", data)
                .then(res => {
                    if (res.data.status === 1) {
                        message.success("Successfully Created");

                    }
                    else {
                        message.error("!Operation Failed");
                    }

                })
        }
    }

    handleChange = (value) => {
        // console.log(`selected ${value}`);
        this.setState({ services: value });

    }

    render() {



        return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col span={24}>
                        <Title level={2}>Service Booking</Title>
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Vechicle Name" style={{ width: "100%" }} onChange={this.onChangeInputBox1} />
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Vechicle Model" style={{ width: "100%" }} onChange={this.onChangeInputBox2} />
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Vechicle Number" style={{ width: "100%" }} onChange={this.onChangeInputBox3} />
                    </Col>

                    <Col span={12}>
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Service Types" onChange={this.handleChange}>
                            <Option value="General Service" >   General Service </Option>

                            <Option value="Oil Change" >   Oil Change </Option>

                            <Option value="Water Wash">   Water Wash </Option>
                        </Select>

                    </Col>




                    <Col span={8}>
                        <DatePicker placeholder="Date of Service" showTime onOk={this.onOk1} />

                    </Col>
                    <Col span={6}>
                        <Button block type="primary" onClick={this.Book} >Book</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
