import React, { Component } from "react";
import {
  Card, Col, Row, Input, Button, PageHeader, message, Popconfirm, Modal
} from "antd";
import { LogoutOutlined } from '@ant-design/icons';
import "./App.less";
import Owner from './Login/Owner';
import Customer from './Login/Customer';
import Register from './Registration';
import axios from "axios";
import config from './config';





class App extends Component {
  state = {
    
    status: 0,
    isModalVisible: false,
    USERNAME:"",
    PASSWORD:"",
    userDetails: {},


  };

  onChangeInputBox1 = (e) => {
    this.setState({ USERNAME: e.target.value });

  };
  onChangeInputBox2 = (e) => {
    this.setState({ PASSWORD: e.target.value });

  };
  login = () => {
    let flag = 0;

    let PASSWORD = this.state.PASSWORD;

  
    if (this.state.USERNAME === "") {
      message.error("Invaild Input Username");
      flag = 1;
      return false;
    }
    else if (PASSWORD === "" ) {
      message.error("Invaild Password");
      flag = 1;
      return false;
    }
    else if (flag === 0) {

      let data = {
        USERNAME: this.state.USERNAME.trim(),
        PASSWORD: this.state.PASSWORD.trim(),
      }


      axios.post(config.serverurl + "/bike_service/login", data)
        .then(res => {

          if (res.data.Status === 1) {

            this.setState({ userDetails: res.data.user_details });
            if (res.data.user_details.role === 'owner') {
              this.setState({ status: 1 });
            }
            else if (res.data.user_details.role === 'customer') {
              this.setState({ status: 2 });
            }
           
          }
          else {
            message.error("Invalid User !");
          }

        })
    }
  }





  showModal = () => {

    this.setState({ isModalVisible: true });

  }
 
  handleOk = () => {
    

    this.setState({ isModalVisible: false });

  }
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  }



  render() {


    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Bike Service Application"
         
        />

        {this.state.status === 1 ? <Owner data={this.state.userDetails} />
          : this.state.status === 2 ? (<Customer data={this.state.userDetails} />)
            
              : (
                <div>
                  <Row justify="center">
                    <Col span={6} >
                      <Card title="Login Portal" style={{ width: "100%", marginTop: "40%" }} bordered type="inner">
                        <Row gutter={[16, 16]} align="middle">
                          <Col span={24}><Input placeholder="Username" onChange={this.onChangeInputBox1} /></Col>
                          <Col span={24}><Input placeholder="Password" onChange={this.onChangeInputBox2} /></Col>
                          <Col span={24}><Button block type="primary" onClick={this.login}>Submit</Button></Col>
                        <Col span={24} >  <Button block type="link" onClick={this.showModal} disabled={this.state.checked === false ? true : false}>Register Login</Button></Col>


                        </Row>
                      </Card>
                    </Col>
                  </Row>
                <Modal title="Register" visible={this.state.isModalVisible} footer={null} onCancel={this.handleCancel} destroyOnClose>
                  <Register />
                </Modal>


                </div>
              )}

       
      </div>
    );
  }
}

export default App;

