

const cartReducer = (state=[],action)=>{

    let countInc = (product)=>{
        if(product.hasOwnProperty('count')){
            product.count+=1;
            state[0]["totalProducts"]+=1;
        }
        else{
            product.count=1;
            state[0]["totalProducts"]+=1;
        }
        return [product];
    }   

    let updateSubPrice = (index)=>{
        
        state[index].subPrice = state[index].count *  state[index].basePrice
        
    }



    switch(action.type){
        case 'addToCart':
            let product = action.payload.product
            console.log(product)
            console.log(state)
            if(!state.length){
                console.log("State is empty")
                product.count = 1;
                state.push({"totalProducts":1,"totalPrice":product.basePrice*product.count})
                product["subPrice"] = product.basePrice*product.count
              
                return [...state,product]
            }
            else{
                let check = false;
                console.log(check)
                check =state.find((stateProduct)=>{
                    if(stateProduct.title == product.title){
                        console.log("Found!!!!")
                        countInc(stateProduct)
                        console.log(stateProduct)
                        console.log(state[0]["totalPrice"])
                        console.log(stateProduct.basePrice)
                        stateProduct["subPrice"] = stateProduct.basePrice*stateProduct.count
                        state[0]["totalPrice"]+=Number(stateProduct.basePrice)
                        return true;
                    }
                    return false;
                })
                console.log(check)
                if(check){
                    console.log(state)
                    return [...state]
                }
                else{
                    countInc(product);
                    console.log(state)
                    product["subPrice"] = product.basePrice
                    state[0]["totalPrice"]+=Number(product.basePrice)
                    return [...state,product]
                }
            }
        case 'decProductCount':
            console.log("Dec Count")
            var index =(action.payload.index);
            console.log(state[index])
            if(state[index].count>1){
                state[index].count-=1;
                state[0]["totalProducts"]-=1;
                state[0]["totalPrice"]-=Number(state[index].basePrice)
                updateSubPrice(index);
            }
            return [...state]
        case 'incProductCount':
            console.log("Dec Count")
            var index =(action.payload.index);
            console.log(state[index])
            if(state[index].count!=5){
                state[index].count+=1;
                state[0]["totalProducts"]+=1;
                console.log("Total Price")
                console.log( state[0]["totalPrice"])
                console.log(state[index].basePrice)
                state[0]["totalPrice"]+=Number(state[index].basePrice)
                updateSubPrice(index);
            }
            return [...state]

        case 'removeProduct':
            console.log("Remove Count")
            var index =(action.payload.index);
            state[0]["totalProducts"]-=Number(state[index].count)
            state[0]["totalPrice"]-=Number(state[index].subPrice)
            state.splice(index, 1);
            return [...state]    
        
                
            
           
           
        default:
            return state
    }
}

export default cartReducer