import React, { Component } from "react";
import { Typography, Row, Col, Select, Button, message, Input, DatePicker } from "antd";
import axios from "axios";
import config from '../../config';
import moment from 'moment';
import momenttimezone from 'moment-timezone';
momenttimezone.tz.setDefault("Asia/Kolkata");
const dateFormatList = 'DD/MM/YYYY HH:mm:ss';
const { Title } = Typography;
const { Option } = Select;

class App extends Component {
    state = {
        collapsed: false,
        status: 0,
        customer_name:"",
        customer_ph_no:"",
        customer_email:"",
        vechicle_name:"",
        customer_place:"",
        vechicle_model:"",
        vechicle_number:"",
        services:"",
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
    onChangeInputBox4 = (e) => {
        this.setState({ customer_name: e.target.value });

    };
    onChangeInputBox5 = (e) => {
        this.setState({ customer_ph_no: e.target.value });

    };
    onChangeInputBox6 = (e) => {
        this.setState({ customer_email: e.target.value });

    };
    onChangeInputBox7 = (e) => {
        this.setState({ customer_place: e.target.value });

    };
    onOk1 = (value) => {
        var i = (moment(value).unix());
        //console.log(i);
        this.setState({ BookDate: i })
        // console.log(moment.unix(i).format(dateFormatList))
    };
    handleChange = (value) => {
        // console.log(`selected ${value}`);
        this.setState({ services: value });

    };
  //functions to specfic customer booking
    Book = () => {
        let flag = 0;
        if (this.state.customer_name === "")
        {
            message.error("Enter Customer Name ");
            flag = 1;
            return false;
        }
        else if (this.state.customer_ph_no === "") {
            message.error("Enter customer Ph No ");
            flag = 1;
            return false;
        }
        else if (this.state.customer_email === "") {
            message.error("Enter customer Email ");
            flag = 1;
            return false;
        }
        else if (this.state.customer_place === "") {
            message.error("Enter customer Place ");
            flag = 1;
            return false;
        }
       else if (this.state.vechicle_name === "") {
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
                "_id":this.props.data._id,
                customer_name: this.state.customer_name,
                customer_ph_no: this.state.customer_ph_no,
                customer_email: this.state.customer_email,
                customer_place: this.state.customer_place,
                vechicle_name: this.state.vechicle_name,
                vechicle_model: this.state.vechicle_model,
                vechicle_number: this.state.vechicle_number,
                services: this.state.services,
                BookDate: this.state.BookDate
            }
            axios.post(config.serverurl + "/bike_service/owner/customer_booking", data)
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

    render() {
        return (
            <div className="fix">
                <Row gutter={[16, 24]}>
                    <Col span={24}>
                        <Title level={2}>Service Booking</Title>
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Customer Name" style={{ width: "100%" }} onChange={this.onChangeInputBox4} />
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Customer Phone Number" style={{ width: "100%" }} onChange={this.onChangeInputBox5} />
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Customer Email" style={{ width: "100%" }} onChange={this.onChangeInputBox6} />
                    </Col>
                    <Col span={6}>
                        <Input placeholder="Customer Place" style={{ width: "100%" }} onChange={this.onChangeInputBox7} />
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
