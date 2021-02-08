const rootReducer = (state=[],action)=>{
    switch(action.type){
        // case 'placeOrder':
        //     let order = {"User Details":action.formValues,
        //                  "Ordered Products":action.orderproducts,
        //                  "Total Price":action.totalPrice}
        //     return [...state,order]
        default:
            return state
    }
}

export default rootReducer