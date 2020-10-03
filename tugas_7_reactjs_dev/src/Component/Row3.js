import React, { Component } from 'react'
import { Row, Col, Card, Button} from 'react-bootstrap'

class Row3 extends Component{
    render(){
        return(
            <>
            <Row noGutters={true}>
          <Col>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
              <Card.Body>
                <Card.Title>Diego Goding Ukir Rekor Spesial Lawan Thailand</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-German</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
            </>
        )
    }
}

export default Row3



