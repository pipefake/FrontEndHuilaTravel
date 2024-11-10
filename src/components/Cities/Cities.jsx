import React from 'react';
import { Container, Col } from 'react-bootstrap';
import CityCard from './CityCard';
import './Cities.css'; 

export const Cities = ({ filteredCities }) => {
  return (
    <div>
        <Container className='fixed-scrollable-container'>
                {filteredCities.map((city) => (
                    <Col key={city._id} xs={12} md={4} className="mb-4">
                        <CityCard city={city} />
                    </Col>
                ))}
        </Container>
    </div>
  )
}
