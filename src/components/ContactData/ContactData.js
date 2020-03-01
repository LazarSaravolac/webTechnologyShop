import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { updateObject, checkValidity } from '../shared/utility';
import Input from '../../Input/Input';
import classes from './ContactData.module.css';
import ModalCart from '../ModalCart';
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
            },    deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Serbia', displayValue: 'Serbia'},
                        {value: 'BH', displayValue: 'BH'},
                        {value: 'Croatia', displayValue: 'Croatia'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
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
            }

        },
        formIsValid: false,
        loading:false
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
    
    console.log(order);
    
    value.onOrder();
    this.setState({
        loading: true
    })
}

    const setTime =() => {
        setTimeout(() => {
            this.setState({
                loading: false
            });
            this.props.history.push('/');
            value.clearCart();
        }, 1500);
      
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

                        let form = (
                            <form >
                                {formElementsArray.map(formElement => (
                                    <Input 
                                        key={formElement.id}
                                        elementType={formElement.config.elementType}
                                        elementConfig={formElement.config.elementConfig}
                                        value={formElement.config.value}
                                        invalid={!formElement.config.valid}
                                        shouldValidate={formElement.config.validation}
                                        touched={formElement.config.touched}
                                        changed={(event) => inputChangedHandler(event, formElement.id)} />
                                ))}
                                <span className={classes.proba}> 
                                <p>
                                        Total amount: {value.cartTotal} $
                                </p>
                                    <button className="btn btn-outline-success text-uppercase mb-3 px-5"
                                        type="button" onClick={(event) => { orderHandler(event);setTime() }}  disabled={!this.state.formIsValid}>
                                Buy
                            </button>
                                 </span>
                            </form>
                        );
                        




                        return (
                            <div className={classes.ContactData}>
                            <h4>Enter your Contact Data</h4>
                            {form}
                                <ModalCart modal={this.state.loading}/>
                        </div>)
                        }}
                </ProductConsumer>
          </React.Fragment>  
        );
    }
}