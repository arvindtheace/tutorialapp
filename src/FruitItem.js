import React from 'react';
import { ListGroup } from 'react-bootstrap';
const FruitItem = (props) => {
    const { fruit } = props;
    return (
        <div>
        <ListGroup.Item>{fruit.name}  {fruit.count}</ListGroup.Item>
        </div>
    )
   
}
export default FruitItem;