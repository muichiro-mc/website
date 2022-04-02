import "../../style/index.css"

import { React, useState } from "react"
import { Row, Col } from "react-bootstrap";
import ProposalCarousel from './Carousel'

function Body(props) {

    let { Contract, Provider, Address} = props;

    return (
        <Row className="justify-content-md-center">
            <Col md={6}>
                <ProposalCarousel
                  Contract={Contract} 
                  Provider={Provider}
                  Address={Address}
                />
            </Col>
        </ Row>
    );
}

export default Body;
