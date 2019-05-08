
const axios = require('axios');
const API_URL = "http://localhost:3000/Users";
const state ={
    all:[],
    error:false
};
const getters = {};
const mutations = {

    setUsers(state, users){
        state.all = users;
    },
    setError(state,error){
        state.error = error;
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
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}