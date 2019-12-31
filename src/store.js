import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        post: []
    },

    mutations: {
        setPosts (state, payload){
            state.posts = payload
        } 
    },

    actions: {
        downloadPosts ({ commit }) {
            if (!localStorage.getItem('__data__')){
                const fakedata = require( './fakedata.json')
                localStorage.setItem('__data__', 
                JSON.stringify(fakedata.posts))
            }
                const posts = JSON.parse(localStorage.getItem('__data__'))
                commit('setPosts', posts)
        },
      async  updatePost ({ state}, id, data) {
            const post = await this.dispatch('getPostById', id)

            post.description = data.description
            post.description = data.description
            post.description = data.description

            localStorage.setItem('__data__', 
            JSON.stringify(state.posts))
        },
       async  getPostById ({ state, dispatch }, id ) {
            if (!state.posts.length) {
                await dispatch('downloadPosts')
            }
            console.log(id)
            for (const post of state.posts) {
                if (post.id === id) {
                    return post
                }
            }

            return false
        }
    }
})