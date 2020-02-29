import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { updateObject, checkValidity } from '../shared/utility';
//import Input from '../Input';
export default class ContactData extends Component { 
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    render() {



        
        return (
            <React.Fragment>
                    <ProductConsumer>
                    {(value) => {

                       
const orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
        cart: value.cart,
        cartTotal: value.cartTotal,
        orderData: formData,
    }

    value.onOrder(order);

}

const inputChangedHandler = (event, inputIdentifier) => {

    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
        touched: true
    });
    const updatedOrderForm = updateObject(this.state.orderForm, {
        [inputIdentifier]: updatedFormElement
    });
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
                        }
                        
                        const formElementsArray = [];
                        for (let key in this.state.orderForm) {
                            formElementsArray.push({
                                id: key,
                                config: this.state.orderForm[key]
                            });
                        }

                        // let form = (
                        //     <form onSubmit={this.orderHandler}>
                        //         {formElementsArray.map(formElement => (
                        //             <Input 
                        //                 key={formElement.id}
                        //                 elementType={formElement.config.elementType}
                        //                 elementConfig={formElement.config.elementConfig}
                        //                 value={formElement.config.value}
                        //                 invalid={!formElement.config.valid}
                        //                 shouldValidate={formElement.config.validation}
                        //                 touched={formElement.config.touched}
                        //                 changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                        //         ))}
                        //         {/* <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button> */}
                        //         <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        //          type="button"  disabled={!this.state.formIsValid}>
                        //         ORDER
                        //     </button>
                        //     </form>
                        // );
                        




                        return (
                        <React.Fragment>das</React.Fragment>)
                        }}
                </ProductConsumer>
          </React.Fragment>  
        );
    }
}