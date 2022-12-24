import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

// Custom component to wrap the PayPalButtons and handle currency changes
const Button= ({ product, productQuantity }) => {
    

    const price = product?.price || '';
const sum=productQuantity*price
console.log(sum)
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    if (paidFor) {
        alert('successful')
    }
    if (error) {
        alert('error')
    }

    return (
        <>
            <PayPalButtons
                
                onClick={async (_data, actions) => {
                    const hasAlreadyBought = false
                    if (hasAlreadyBought) {
                        setError("You already bought this course")
                        return await actions.reject()
                    } else {
                        return await actions.resolve()
                    }
                }}
                createOrder={async (_data, actions) => {
                    return await actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: sum
                                },
                            },
                        ],
                    }).then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                    });

                }}
                onApprove={async (_data, actions) => {
                    return await actions.order.capture().then(function (details) {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                        setPaidFor(true)
                    })
                }}

                onCancel={() => {
                    console.log('Canceled');
                }}
                onError={(err) => {
                    setError(err)
                    console.error('Error', err);
                }}
            />
        </>
    );
};

export default Button;