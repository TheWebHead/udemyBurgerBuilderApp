import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>
        : {props.ingredients[igKey]}
        </li>
    });
    
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong> {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button
            clicked={props.purchaseContinued}
            btnType={'Success'}
            >PROCEED</Button><Button
            btnType={'Danger'}
            clicked={props.purchaseCancelled}
            >CANCEL</Button>
            
        </Aux>
    )
}

export default OrderSummary;
