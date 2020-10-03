import React, { Component  } from 'react';
import {  Row, Col, Dropdown, Image } from 'react-bootstrap';

class Header extends Component {
		render(){
				return (
						<Row className="p-3 mb-2 bg-dark text-white">
								<Col md={2}>
										<Dropdown>
												<Dropdown.Toggle variant="primary" id="dropdown-basic">
														Pilih Bahasa
												</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Arab</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Sunda</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Jawa</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Sumatera</Dropdown.Item>
                                        </Dropdown.Menu>
										</Dropdown>
								</Col>

								<Col md={{span:3, offset:7}}>
                                <Image 
								className="img1 mx-auto d-block"
								src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
								alt="user"
								style={{width:56}}/>



						<center>	<p>Alan Saputra</p> 	</center>
			         	</Col>
		</Row>
				)
		}
}
export default Header;
