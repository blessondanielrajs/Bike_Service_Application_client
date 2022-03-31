import React, { Component } from "react";
import {
    Card, Col, Row, Input, Button, Modal, PageHeader, message
} from "antd";
import { } from '@ant-design/icons';
import "./App.less";

class App extends Component {
    state = {


        status: "",
        name: "",
        ph_no: "",
        email: "",
        password:"",
        place:""
      

    };

    onChangeInputBox1 = (e) => {
        this.setState({ name: e.target.value });

    };

    onChangeInputBox2 = (e) => {
        this.setState({ ph_no: e.target.value });

    };

    onChangeInputBox3 = (e) => {
        this.setState({ email: e.target.value });

    };

    onChangeInputBox4 = (e) => {
        this.setState({ password: e.target.value });

    };

    onChangeInputBox5 = (e) => {
        this.setState({ place: e.target.value });

    };



  



    render() {


        return (
            <div>

                <Row gutter={[16, 16]} align="middle">
                    <Col span={12}><Input  placeholder="Name" onChange={this.onChangeInputBox1} /></Col>
                    <Col span={12}><Input  placeholder="Phone Number" onChange={this.onChangeInputBox2} /></Col>
                    <Col span={12}><Input  placeholder="Email" onChange={this.onChangeInputBox3} /></Col>
                    <Col span={12}><Input  placeholder="Place" onChange={this.onChangeInputBox4} /></Col>
                    <Col span={12}><Input  placeholder="Password" onChange={this.onChangeInputBox5} /></Col>
                    <Col span={12} offset={7}><Button block type="primary" onClick={this.register}>Register</Button></Col>
                </Row>









            </div>
        );
    }
}


export default App;

