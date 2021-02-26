const cartReducer = (state=[],action)=>{
    // Update Product Quantity Count
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
            console.log("ADD TO CART REDUCER")
            let product = action.payload.product
            if(!state.length){
                product.count = 1;
                state.push({"totalProducts":1,"totalPrice":product.basePrice*product.count})
                product["subPrice"] = product.basePrice*product.count
                return [...state,product]
            }
            else{
                let check = false;
                check =state.find((stateProduct)=>{
                    if(stateProduct.title === product.title && stateProduct.selectedSize === product.selectedSize){
                        countInc(stateProduct)
                        stateProduct["subPrice"] = stateProduct.basePrice*stateProduct.count
                        state[0]["totalPrice"]+=Number(stateProduct.basePrice)
                        return true;
                    }
                    return false;
                })
                if(check){
                    return [...state]
                }
                else{
                    countInc(product);
                    product["subPrice"] = product.basePrice
                    state[0]["totalPrice"]+=Number(product.basePrice)
                    return [...state,product]
                }
            }
        case 'decProductCount':
            var index =(action.payload.index);
            if(state[index].count>1){
                state[index].count-=1;
                state[0]["totalProducts"]-=1;
                state[0]["totalPrice"]-=Number(state[index].basePrice)
                updateSubPrice(index);
            }
            return [...state]
        case 'incProductCount':
            index =(action.payload.index);
            if(state[index].count!==5){
                state[index].count+=1;
                state[0]["totalProducts"]+=1;
                state[0]["totalPrice"]+=Number(state[index].basePrice)
                updateSubPrice(index);
            }
            return [...state]
        case 'removeProduct':
            index =(action.payload.index);
            state[0]["totalProducts"]-=Number(state[index].count)
            state[0]["totalPrice"]-=Number(state[index].subPrice)
            state.splice(index, 1);
            return [...state]    
        case 'clearCart':
            state.length=0
            return [...state]
        default:
            return state
    }
}

export default cartReducer