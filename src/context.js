import React, { Component } from 'react';
import Client from './Contentful';



const ProductContext = React.createContext();



class ProductProvider extends Component {

    state = {
        phones: [],
        tv:[],
        detailPhone: null,
        cart: [],
        modalOpen: false,
        modalPhone: {price:0,img:0,title:0},
        cartSubTotal: 0,
        cartTax:0,
        cartTotal:0,
        detailTV: null,
        modalTV: {price:0,img:0,title:0},
        modalOpenTV: false,
        sortedPhones: [],
        price: 0,
        maxPrice:0
    }

    componentDidMount() {
        this.getDataPhone();
        this.getDataTV();
        
        // this.setProducts();
    }

    getDataPhone = async () => {
        try{
            let responsePhone = await Client.getEntries({
                content_type:"storePhones"
            });
           
            let phones = this.formatData(responsePhone.items);
          
            let maxPrice = Math.max(...phones.map(item => item.price));
            this.setState({
                phones:phones,
                sortedPhones: phones,
                price: maxPrice,
                maxPrice:maxPrice
            })
        } catch(error){
            console.log(error + 1);
            
        }
    }

    handleChange = (event) => {
       
        this.setState({
            price:event.target.value
        },this.filterPhones)
      
        
    }


    filterPhones = () => {
        let { phones} = this.state;
        let tempPhones = [...phones];
        tempPhones = tempPhones.filter(car => car.price <= this.state.price);
        this.setState({
            sortedPhones: tempPhones
        })
    }


    getDataTV = async () => {
        try{
            let responseTV = await Client.getEntries({
                content_type:"storeTv"
            });
           
            let tv = this.formatData(responseTV.items);
            

            this.setState({
                tv
            })
        } catch(error){
            console.log(error + 1);
            
        }
    }

    formatData(items) {
        let tempPhones = items.map(item => {
            let id = item.fields.id;
            let images = item.fields.img.fields.file.url;
            let img = "http:" + images;
            let fields = { ...item.fields };
            let price = fields.price;
            let company = fields.company;
            let inCart = fields.inCart;
            let count = fields.count;
            let total = fields.total;
            let title = fields.title;
            let info = fields.info.content[0].content[0].value;
          
            
            let phone = { price,company,inCart,count,total, img, id,info ,title};
            return phone;

        })

        return tempPhones;
    }

    getItem = (id) => {
        const product = this.state.phones.find(product => product.id === id);
        return product;
    }

    getItemTV = (id) => {
        const product = this.state.tv.find(product => product.id === id);
        return product;
    }

    // setProducts = () => {
    //     let phones = [];
    //     storePhone.forEach(item => {
    //         const singleItem = { ...item };
    //         phones = [...phones, singleItem];
    //     });
    //     let tv = [];
    //     storeTV.forEach(item => {
    //         const singleItem = { ...item };
    //         tv = [...tv, singleItem];
    //     });
    //     this.setState(() => {
    //         return {tv}
    //     })
    // }

    handleDetail = (id) => {
        const phone = this.getItem(id);
        this.setState(() => {
            return { detailPhone: phone };
          });
    }

    handleDetailTV= (id) => {
        const tv = this.getItemTV(id);
        this.setState(() => {
            return { detailTV: tv };
          });
    }

    addToCart = (id) => {
        let tempPhones = [...this.state.phones];
        const index = tempPhones.indexOf(this.getItem(id));
        console.log(index + 1);
        const product = tempPhones[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
       
        
        this.setState(() => {
            return { phones: tempPhones, cart:[...this.state.cart, product] };
        }, () => {
                this.addTotals();
            
        })
    }

    addToCartTV = (id) => {
        let tempProducts = [...this.state.tv];
        const index = tempProducts.indexOf(this.getItemTV(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { tv: tempProducts, cart:[...this.state.cart, product] };
        }, () => {
                this.addTotals();
            
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=> {
            return{modalPhone: product, modalOpen:true}
        })
    }

    openModalTV = id => {
        const product = this.getItemTV(id);
        this.setState(()=> {
            return{modalTV: product, modalOpenTV:true}
        })
    }


    closeModal = () => {
        this.setState(()=>{
            return {modalOpen: false}
        })
    }

    closeModalTV = () => {
        this.setState(()=>{
            return {modalOpenTV: false}
        })
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        let index = tempCart.indexOf(this.getItem(id));
       
       if(index===-1){
        index=tempCart.indexOf(this.getItemTV(id));
    }
    let product = tempCart[index];
    product.count +=1;
    const price = product.price;
    const count = product.count;
    product.total = price * count;
    this.setState(() => {
        return{cart:[...tempCart]}
    }, () => {
            this.addTotals();
    })

    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        let index = tempCart.indexOf(this.getItem(id));
        if(index===-1){
            index=tempCart.indexOf(this.getItemTV(id));
        }
        let product = tempCart[index];
        product.count -= 1;
        if (product.count === 0) {
             this.removeItem(id);
            return;
        }
        const price = product.price;
        const count = product.count;
        product.total = price * count;
        this.setState(() => {
            return{cart:[...tempCart]}
        }, () => {
                this.addTotals();
        })
        
    }


    removeItem = id => {
        let tempPhones = [...this.state.phones];
        let tempCart = [...this.state.cart];
        let tempTV = [...this.state.tv];
        tempCart = tempCart.filter(item => item.id !== id);
        let removedProduct;
        let index = tempPhones.indexOf(this.getItem(id));
        if (index === -1) {
           
            
            index = tempTV.indexOf(this.getItemTV(id));
            removedProduct = tempTV[index];
            removedProduct.inCart = false;
            removedProduct.count = 0;
            removedProduct.total = 0;
    
            this.setState(() => {
                return {
                    cart: [...tempCart],
                    tv:[...tempTV]
                }
            }, () => {
                    this.addTotals();
            })
           
            
            return;
        }
        removedProduct = tempPhones[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                phones:[...tempPhones]
            }
        }, () => {
                this.addTotals();
        })

       
            
    }

    clearCart = () => {
        this.setState(() => {
           return{cart:[]}
        }, () => {
                this.getDataPhone();
                this.getDataTV();
                this.addTotals();
            })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal:total
            }
        })
    }

    onOrder = () => {

        console.log("Naruci");
        
    }
    

  render (){
  return(
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addToCartTV: this.addToCartTV,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,
          handleDetailTV: this.handleDetailTV,
          openModalTV:this.openModalTV,
          closeModalTV: this.closeModalTV,
          handleChange: this.handleChange,
          onOrder:this.onOrder
      }}>
      {this.props.children}    
     </ProductContext.Provider>
       )
  };
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };