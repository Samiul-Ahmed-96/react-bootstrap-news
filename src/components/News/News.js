import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const{title,author,description,urlToImage} = props.news;
    return (
        <div>
        <Col>
            <Card>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body className="bg-light">
                <Card.Title>{title}</Card.Title>
                <small>{author}</small>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default News;