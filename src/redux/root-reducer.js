import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});
