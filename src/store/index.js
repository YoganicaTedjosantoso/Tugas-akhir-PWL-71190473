import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    email:'',
    search:'',
    product:null,
    cart:[],
  },
  getters: {
    cart:(state) => state.cart,
    
    totalPrice(state){
      var cartList = state.cart
      var totalQtyPrice=0;
      for(var i = 0; i < cartList.length;i++){
          totalQtyPrice += (cartList[i].qty * cartList[i].harga)
      }
      console.log(totalQtyPrice)
      return totalQtyPrice
    },
    loginInfo(state){
      return state.email
    },
    loginTest(state){
      return state.isLogin
    },
    getIsiCart(state){
      return state.cart.length
    },
    getCart(state){
      return state.cart
    }
  },
  mutations: {
    loginState (state, {isLogin, email, password}){
      state.isLogin = isLogin
      state.email = email
      state.password = password
    },
    searchInput(state, search){
      state.search = search
    },
    addToCart(state, item){
      const produkInCart = state.cart.find((product)=>{
        return product.id === item.id
      })
      if(produkInCart){
        produkInCart.qty++;
      }
      else{
        state.cart.push({...item, qty:1})
      }
    },

    addQtyItem(state, item){
      let produkInCart = state.cart.find(product =>{
        return product.id === item.id
      })
      if(produkInCart){
        produkInCart.qty +=1
      }
    },
    reduceQtyItem(state, item){
      let produkInCart = state.cart.find(product =>{
        return product.id === item.id
      })
      if(produkInCart.qty > 1){
        produkInCart.qty -=1;
      }else{
        state.cart = state.cart.filter(product => {
          return product.id !== item.id});
      }
      // else{
      //   state.cart.splice(state.cart.indexOf(produkInCart,1))
      // }
    },
  },
  actions: {
    addToCart({commit},item){
      commit ("addToCart",item)
    },
    addQty({commit}, item){
      commit ("addQtyItem", item)
    },
    reduceQty({commit}, item){
      commit ("reduceQtyItem", item)
    },
  },
  modules: {

  }
})
