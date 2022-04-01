import React, { Component } from "react";
import {
    Card, Col, Row, Input, Button, Modal, PageHeader, message
} from "antd";
import { } from '@ant-design/icons';
import "./App.less";
import axios from "axios";
import config from './config';
class App extends Component {
    state = {


        status: "",
        name: "",
        ph_no: "",
        email: "",
        password: "",
        place: ""


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
        this.setState({ place: e.target.value });

    };

    onChangeInputBox5 = (e) => {
        this.setState({ password: e.target.value });

    };


    register = () => {
        let flag = 0;

        let name = this.state.name;

        let ph_no = this.state.ph_no;
        let email = this.state.email;
        let password = this.state.password;
        let place = this.state.place;


        if (name === "") {
            message.error("Invaild Input Frist Name");
            flag = 1;
            return false;
        }



        else if (ph_no === "") {
            message.error("Invaild Input Phone Number");
            flag = 1;
            return false;
        }
        else if (email === "") {
            message.error("Invaild Input email");
            flag = 1;
            return false;
        }

        else if (password === "") {
            message.error("Invaild Input Password");
            flag = 1;
            return false;
        }
        else if (place === "") {
            message.error("Invaild Input place");
            flag = 1;
            return false;
        }

        else if (flag == 0) {
            let data = {
                name: this.state.name.trim(),
                ph_no: this.state.ph_no.trim(),
                email: this.state.email.trim(),
                "password": this.state.password.trim(),
                "place": this.state.place.trim(),


            }
            axios.post(config.serverurl + "/bike_service/login/registation", data)
                .then(async res => {
                    if (res.data.status === 1) {
                        message.success("Successfully register");
                        this.setState({ status: 1 })
                    }
                    else {
                        message.error("!Operation Failed");
                    }


                })
        }






    }





    render() {


        return (
            <div>

                <Row gutter={[16, 16]} align="middle">
                    <Col span={12}><Input placeholder="Name" onChange={this.onChangeInputBox1} /></Col>
                    <Col span={12}><Input placeholder="Phone Number" onChange={this.onChangeInputBox2} /></Col>
                    <Col span={12}><Input placeholder="Email" onChange={this.onChangeInputBox3} /></Col>
                    <Col span={12}><Input placeholder="Place" onChange={this.onChangeInputBox4} /></Col>
                    <Col span={12}><Input placeholder="Password" onChange={this.onChangeInputBox5} /></Col>
                    <Col span={12} offset={7}><Button block type="primary" onClick={this.register}>Register</Button></Col>
                </Row>









            </div>
        );
    }
}


export default App;

