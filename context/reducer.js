import { initialState } from './appContext';

import {
   
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  UPLOAD_IMAGE,
  GET_FEATURED,
  getSingleProperty,
  GET_ALL_PROPERTY,
  GET_ALL_PROPERTY_WITH_OUT_FILTERS,
  CLEAR_FILTERS,
  HANDLE_CHANGE,
  HANDLE_CHECK,
  CREATE_ORDER,CREATE_ORDER_ERROR,
  GET_CURRENT_USER_ORDERS,
  NEWS_LETTER_ERROR,
  NEWS_LETTER_SUCCESS,
  UPDATE_PASSSOWRD_ERROR,
  // UPDATE_USER_SUCCESS,
  UPDATE_PASSSOWRD_SUCCESS,
  UPLOAD_IMAGE_USER,
  FORGET_PASSWORD_ERROR,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_BEGIN,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  STRIP_LOADING_BEGIN,
  STRIP_LOADING_END
} from './actions'
const reducer = (state, action) => {
  


  //  For the api
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }


  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, userLoading: true, showAlert: false };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      userLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
    };
  }


  if(action.type===UPLOAD_IMAGE){
    return{
      ...state,
      Image:action.payload.image
    }
  }

  if(action.type===GET_FEATURED){
    return{
      ...state,
      featured:action.payload.data
    }
  }


  if(action.type===getSingleProperty){
    return{
      ...state,
      Property:action.payload.data
    }
  }


  if(action.type===GET_ALL_PROPERTY){
    return{
      ...state,
      Properties:action.payload.data
    }
  }

  if(action.type===GET_ALL_PROPERTY_WITH_OUT_FILTERS){
    return{
      ...state,
      PropertiesWithoutFilters:action.payload.data
    }
  }


  
  if(action.type===CLEAR_FILTERS){
    return{
      ...state,
      search:"",
      category:"",
      company:"",
      color:"",
      freeShipping:false,
      sort:"",
      price:3099
    }
   }


    if(action.type===HANDLE_CHANGE){
      return {
        ...state,
        [action.payload.name]:action.payload.value
      }
     }
  
     if(action.type===HANDLE_CHECK){
      return {
        ...state,
        [action.payload.name]:action.payload.value
      }
     }
  
     if(action.type===CREATE_ORDER){
      return{
        ...state,
        showAlert:true,
        alertType:"success",
        alertText:"The Property is added to the cart"
      }
     }

     if(action.type===CREATE_ORDER_ERROR){
      return{
        ...state,
        showAlert:true,
        alertType:"danger",
        alertText:action.payload.data
      }
     }


     if(action.type===GET_CURRENT_USER_ORDERS){
      return{
        ...state,
        UserOrders:action.payload.data
      }
     }

     if(action.type===NEWS_LETTER_ERROR){
      return{
        ...state,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.data
      }
     }

     if(action.type===NEWS_LETTER_SUCCESS){
      return{
        ...state,
        showAlert:true,
        alertType:'success',
        alertText:action.payload.data
      }
     }
     if(action.type===UPDATE_PASSSOWRD_SUCCESS){
      return{
        ...state,
        showAlert:true,
        alertType:'success',
        alertText:action.payload.data
      }
     }
     if(action.type===UPDATE_PASSSOWRD_ERROR){
      return{
        ...state,
        showAlert:true,
        alertType:'danger',
        alertText:action.payload.data
      }
     }

     if(action.type===UPLOAD_IMAGE_USER){
      return{
        ...state,
        userImage:action.payload.image
      }
     }

     if(action.type===FORGET_PASSWORD_BEGIN){
      return{
        ...state,
        isLoading:true
      }
     }

     if(action.type===FORGET_PASSWORD_SUCCESS){
      return{
        ...state,
        showAlert:true,
        alertText:action.payload.data,
        alertType:"success",
        isLoading:false
      }
     }

     if(action.type===FORGET_PASSWORD_ERROR){
      return{
        ...state,
        showAlert:true,
        alertText:action.payload.data,
        alertType:"danger",
        isLoading:false
      }
     }


     if(action.type===RESET_PASSWORD_SUCCESS){
      return{
        ...state,
        showAlert:true,
        alertText:action.payload.data,
        alertType:"success",
        isLoading:false
      }
     }

     if(action.type===RESET_PASSWORD_ERROR){
      return{
        ...state,
        showAlert:true,
        alertText:action.payload.data,
        alertType:"danger",
        isLoading:false
      }
     }

     if(action.type===STRIP_LOADING_BEGIN){
      return{
        ...state,
        isLoading:true
      }
     }

     if(action.type===STRIP_LOADING_END){
      return{
        ...state,
        isLoading:false
      }
     }

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
