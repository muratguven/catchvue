 import store from '../store';
const axios = require('axios');
const API_URL = "http://localhost:3000/Users";
const state ={
    all:[],
    error:false,
    user:{}
};

const getters = {};
const mutations = {

    setUsers(state, users){
        state.all = users;
    },
    setError(state,error){
        state.error = error;
    },
    setUser(state, user){
        state.user = user;
    }
};
const actions = {

    getAllUsers({commit}){
        
        axios.get(API_URL)
        .then(function(response){
            // eslint-disable-next-line no-console
            console.log("res",response);
            let data = response.data
            commit('setUsers',data);
        }).catch(function(error){
            // eslint-disable-next-line no-console
            console.log(error);
            commit('setError',true);
        })
    },
    registerUser({commit}, user){

        //Vuex kullanarak json-server a yeni bir kullanıcı ekliyorum. 
        axios.post(API_URL, user)
        .then(function(){
            
            /* 
            Ayrıca yeni user list için action dispatch ediyorum.
            */
          
           store.dispatch('users/getAllUsers');
        })
        .catch(function(error){
            // eslint-disable-next-line no-console
            console.log(error);
            commit('setError',true);
        });
    },
    getUser({commit}, id){
        // eslint-disable-next-line
        console.log("id",id);
        axios.get(API_URL+'?id='+id)
            .then(function(response){
                 // eslint-disable-next-line
                console.log("user response",response.data);
                commit('setUser',response.data[0]);
            })
            .catch(function(error){
                // eslint-disable-next-line no-console
                console.log(error);
                commit('setError',true);
            });
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}