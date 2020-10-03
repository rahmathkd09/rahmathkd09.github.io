import React, {Component } from 'react'
import {Container} from 'react-bootstrap'
import Row1 from '../Component/Row1'
import Row2 from '../Component/Row2'
import Row3 from '../Component/Row3'
class Pagecontainer extends Component{
    render(){
        return(
            <>
            <Container fluid={true} style={{marginTop: "15px"}}>
         <Row1 />
         <Row2 />
         <Row3 />
        
       
      </Container>
            </>
        )
    }
}
export default Pagecontainer