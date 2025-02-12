import  authReducer  from "./Reducers/authReducer";
import  cateReducer  from "./Reducers/categoryReducer";
import  chatReducer  from "./Reducers/chatReducer";
import  homeReducer  from "./Reducers/homeReducer";
import  productReducer  from "./Reducers/productReducer";
import  sellerReducer  from "./Reducers/sellerReducer";
import  wishlistReducer  from "./Reducers/wishlistReducer";


const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    category: cateReducer,
    product: productReducer,
    seller: sellerReducer,
    wishlist: wishlistReducer,
    chat: chatReducer
}

export default rootReducer