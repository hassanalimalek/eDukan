

const rootReducer = (state=[],action)=>{
    switch(action.type){
        case 'placeOrder':
            console.log("Place Order")
            console.log(action.formValues)
            console.log(action.totalPrice)
            console.log(action.orderproducts)
            let order = {"User Details":action.formValues,
                         "Ordered Products":action.orderproducts,
                         "Total Price":action.totalPrice}
            console.log(order)
            return [...state,order]
        default:
            // console.log("Default Case")
            // console.log(state.shoes[0])
            return state
    }
}

export default rootReducer