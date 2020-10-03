import React, { Component} from 'react'
import {Row,Col,Alert,Media,ButtonGroup,Badge,Button} from 'react-bootstrap'

class Row1 extends Component {
    render(){
        return(
            <>  
    <Row>
          <Col sm={3}><Alert variant="primary"> Website react Bootstrap</Alert></Col>
          <Col></Col>
          <Col md="auto">
            <ButtonGroup >
              <Button variant="primary">Notification<Badge variant="light">9</Badge></Button>
              <Button variant="primary">Message<Badge variant="light">19</Badge></Button>
            </ButtonGroup>
          </Col>
          <Col xs lg="2">
          <Media>
            <img
              width={30}
              height={30}
              className="mr-3"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Andreas</h5>
            </Media.Body>
          </Media>
          </Col>
        </Row>
        </>

        )
    }

}
export default Row1


