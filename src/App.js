import React, { Component } from 'react';
import './App.css';
import BuildControls from './Components/BuildControls';
import Total from './Components/Total'; 
import ls from 'local-storage';

class App extends Component {
  
    constructor(){
        super();
        
    this.state={
      items:[
          {id:9090, name:'item1', label:'item1', price:200, discount:10,type_discount:28.5,
           qty:1,type:"fiction",disable:false},
          
          {id:9091, name:'item2', label:'item2', price:250, discount:15,type_discount:0,
           qty:1,type:"literature",disable:false},
          
          {id:9092, name:'item3', label:'item3', price:320, discount:5,type_discount:0,
           qty:1,type:"literature",disable:false},
          
          {id:9093, name:'item4', label:'item4', price:290, discount:0,type_discount:0,
           qty:1,type:"thriller",disable:false}, 
          
          {id:9094, name:'item5', label:'item5', price:500, discount:25,type_discount:0,
           qty:1,type:"thriller",disable:false},
          
          {id:9095, name:'item6', label:'item6', price:150, discount:5,type_discount:0,
           qty:1,type:"literature",disable:false},
          
          {id:9096, name:'item7', label:'item7', price:700, discount:22,type_discount:0,
           qty:1,type:"literature",disable:false},
          
          {id:9097, name:'item8', label:'item8', price:350, discount:18,type_discount:49.8,
           qty:1,type:"fiction",disable:false},
          
      ],
      totalPrice:2760,
      totalDiscount:100,
      totalTypeDiscount:78.3,
      totalQty:8,
      }
        
        
        this.addItems= (id)=> {
              const updatedItems= this.state.items.map(item =>{
              if(item.id === id)
              {
                  item.qty++;
                  item.disable= false;
                  
                  this.setState({
                    totalQty: this.state.totalQty +1,
                    totalDiscount: this.state.totalDiscount + item.discount,
                    totalPrice: this.state.totalPrice + item.price,
                    totalTypeDiscount: this.state.totalTypeDiscount + item.type_discount
                    })
              }     
                return item;
            });
              
              this.setState({
                  items: [].concat(updatedItems),        
              })
            
//            const items = this.state.items;
//            const totalPrice = this.state.totalPrice;
//            const totalDiscount = this.state.totalDiscount;
//            const totalTypeDiscount = this.state.totalTypeDiscount;
//            const totalQty = this.state.totalQty;
//            
//            ls.set("items", JSON.stringify(items));
//            ls.set("totalPrice", JSON.stringify(totalPrice));
//            ls.set("totalDiscount", JSON.stringify(totalDiscount));
//            ls.set("totalTypeDiscount", JSON.stringify(totalTypeDiscount));
//            ls.set("totalQty", JSON.stringify(totalQty));
        }
        
          
          this.removeItems= (id)=> {
              const updatedItems= this.state.items.map(item =>{
                if(item.id === id)
                 {
                       if(item.qty > 0)
                       {
                           item.qty--;
                           this.setState({
                             totalPrice: this.state.totalPrice - item.price,
                             totalQty: this.state.totalQty -1,
                             totalDiscount: this.state.totalDiscount - item.discount,
                             totalTypeDiscount: this.state.totalTypeDiscount - item.type_discount
                            })
                       } 
                       if(item.qty === 0)
                       {
                           item.disable= true;
                       } 
                 }
                   return item;
                });
              
              this.setState({
                  items: [].concat(updatedItems),      
              })
              
//            const items = this.state.items;
//            const totalPrice = this.state.totalPrice;
//            const totalDiscount = this.state.totalDiscount;
//            const totalTypeDiscount = this.state.totalTypeDiscount;
//            const totalQty = this.state.totalQty;
//            
//            ls.set("items", JSON.stringify(items));
//            ls.set("totalPrice", JSON.stringify(totalPrice));
//            ls.set("totalDiscount", JSON.stringify(totalDiscount));
//            ls.set("totalTypeDiscount", JSON.stringify(totalTypeDiscount));
//            ls.set("totalQty", JSON.stringify(totalQty));
          }
          
          
          this.removeWholeItem= (id)=> {
              
              const updatedItems= this.state.items.filter(item =>{
                   
                   if(item.qty > 0 && item.id === id)
                   {
                       this.setState({
                         totalPrice: this.state.totalPrice - item.price*item.qty,
                         totalQty: this.state.totalQty -item.qty,
                         totalDiscount: this.state.totalDiscount - item.discount*item.qty,
                         totalTypeDiscount: this.state.totalTypeDiscount - item.type_discount*item.qty
                        })
                   } 
                   
                   return item.id !== id;
                  
                });
              
              this.setState({
                  items: [].concat(updatedItems),      
              })
              
//            const items = this.state.items;
//            const totalPrice = this.state.totalPrice;
//            const totalDiscount = this.state.totalDiscount;
//            const totalTypeDiscount = this.state.totalTypeDiscount;
//            const totalQty = this.state.totalQty;
//            
//            ls.set("items", JSON.stringify(items));
//            ls.set("totalPrice", JSON.stringify(totalPrice));
//            ls.set("totalDiscount", JSON.stringify(totalDiscount));
//            ls.set("totalTypeDiscount", JSON.stringify(totalTypeDiscount));
//            ls.set("totalQty", JSON.stringify(totalQty));   
          }
          
          
//            this.componentDidMount=()=> {
//              const items = JSON.parse(ls.get("items"));
//              const totalPrice = JSON.parse(ls.get("totalPrice"));
//              const totalDiscount = JSON.parse(ls.get("totalDiscount"));
//              const totalTypeDiscount = JSON.parse(ls.get("totalTypeDiscount"));
//              const totalQty = JSON.parse(ls.get("totalQty"));
//              this.setState( { items, totalPrice, totalDiscount, totalTypeDiscount, totalQty } );
//            }
            
        
    }
    
    render(){
        
    return (
        <div className="container">
        <div>
        
        
        <div className="row">
        
     
        <div className="col-md-8">
        <BuildControls removeItems={this.removeItems} addItems={this.addItems} totalPrice={this.state.totalPrice} totalQty={this.state.totalQty} items={this.state.items} 
        removeWholeItem= {this.removeWholeItem} totalDiscount={this.state.totalDiscount} totalTypeDiscount={this.state.totalTypeDiscount} />
        </div>
        <div className="col-md-4">
        <Total totalPrice={this.state.totalPrice} totalQty={this.state.totalQty} items={this.state.items} totalDiscount={this.state.totalDiscount} totalTypeDiscount={this.state.totalTypeDiscount} />
        </div>
        
        
        </div>
        
        </div>
        </div>
    );
  }
}

export default App;




