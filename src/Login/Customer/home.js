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
        vechicle_name:"",
        vechicle_model:"",
        vechicle_number:""
       
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
                    <Col span={24}>     <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
                        <Row>
                            <Col span={6}>
                                <Checkbox value="A">General Service</Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="B">Oil Change</Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="C">Water Wash</Checkbox>
                            </Col>

                        </Row>
                    </Checkbox.Group>            </Col>

                    <Col span={8}>  
                     <DatePicker placeholder="Date of Service" showTime onOk={this.onOk1} />

                    </Col>
                    <Col span={6}> 
                    <Button block type="primary" onClick={this.create} >Book</Button>
                    </Col>
                    </Row>
            </div>
        );
    }
}

export default App;
