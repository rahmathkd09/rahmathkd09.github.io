import React, {Component} from 'react'
import {Col, Row, Breadcrumb} from 'react-bootstrap'

class Row2 extends Component{
    render(){
        return(
            <>
            <Row>
          <Col ></Col>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
            </>
        )
    }
}

export default Row2
