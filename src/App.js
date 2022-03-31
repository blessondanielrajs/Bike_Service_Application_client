import React, { Component } from "react";
import {
  Card, Col, Row, Input, Button, PageHeader, message, Popconfirm
} from "antd";
import { LogoutOutlined } from '@ant-design/icons';
import "./App.less";



class App extends Component {
  state = {
    
    status: 0
  };


 

  render() {


    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Assignment"
          extra={[
            <Button className={this.state.status === 0 ? "hide" : " "} type="primary" key="1" onClick={this.logout} danger><LogoutOutlined />Logout</Button>,
          ]}
        />

        {this.state.status === 1 ? <Faculty data={this.state.userDetails} />
          : this.state.status === 2 ? (<Admin data={this.state.userDetails} />)
            : this.state.status === 3 ? (<Student data={this.state.userDetails} />)
              : (
                <div>
                  <Row justify="center">
                    <Col span={6} >
                      <Card title="Login Portal" style={{ width: "100%", marginTop: "40%" }} bordered type="inner">
                        <Row gutter={[16, 16]} align="middle">
                          <Col span={24}><Input placeholder="Username" onChange={this.onChangeInputBox1} /></Col>
                          <Col span={24}><Input placeholder="Password" onChange={this.onChangeInputBox2} /></Col>
                          <Col span={24}><Button block type="primary" onClick={this.login}>Submit</Button></Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                </div>
              )}
      </div>
    );
  }
}

export default App;

