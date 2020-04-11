import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import choose1 from './adult-blur-blurred-background-687824.png';
import choose2 from './chef-cook-food-33614.png';
import choose3 from './architecture-building-city-2047397.png';

const Choose = () => {
    return (
        <div className="choose">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h1>Why you choose us</h1>
                    <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                    </div>
                </div>
                <div className="row">
                    <CardDeck className="my-3">
                    <Card>
                        <Card.Img variant="top" src={choose1} />
                        <Card.Body>
                        <Card.Title>Fast Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <a href="#">See More</a>
                        </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={choose2} />
                        <Card.Body>
                        <Card.Title>A good auto responder.</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <a href="#">See More</a>
                        </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={choose3} />
                        <Card.Body>
                        <Card.Title>Home Delivery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <a href="#">See More</a>
                        </small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
            </div>
        </div>
    );
};

export default Choose;