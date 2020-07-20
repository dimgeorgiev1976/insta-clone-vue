import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({ // функции асинхронные, все возвращают промисы
    state: {  // коллекция состояний хранилища // ин-фа о текущем состоянии данных // состояние иммутабельно
        post: []
    },
    mutations: {   // коллекция изменений // ф-ции, приводящие к изменению состояния
        //!!! Мутации должны быть синхронными
        addPosts (state, payload){ // payLoad - полезная нагрузка // у нас это посты
            state.posts = payload
        } 
    },

    actions: {
        downloadPosts ({ commit }) {  // коллекция действий // ф-ции, приводящие к мутациям
            if (!localStorage.getItem('__data__')){ // есть ли в localStorage __data__
                //Eсли их нету то мъй загружаем от fakedata и вложим в localStorage
                const fakedata = require( './fakedata.json')
                commit('addPosts', fakedata.posts)
                localStorage.setItem('__data__', JSON.stringify(fakedata))
            }
                const memory = JSON.parse(localStorage.getItem('__data__'))  // если есть - достаем
                commit('addPosts', memory.posts)  // засовываем в посты
        },

        getPostById ({ state}, id ) {
            return state.posts.filter(x => x.id === id) [0]
        },
      async updatePost ({ commit}, arr) {
          const [editPost, id] = arr
          let data = JSON.parse(localStorage.getItem('__data__'))
          await (data.posts).map(x => {
              if (x.id === id) {
                  if (editPost.description ) {
                      x.content.description = editPost.description
                  }
                  if(editPost.tags.length>0) {
                      x.content.tags = editPost.tags
                  }
              }
          })
          localStorage['__data__'] = JSON.stringify(data)
          commit('addPosts', data.posts)
      },
      async addNewPost(context, newPost) {
          let post = context.state.posts[context.state.posts.length - 1]
          let data = JSON.parse(localStorage.getItem('__data__'))
          post.id = post.id+1
          post.content.image = []
          post.content.image.push(newPost.image)
          post.content.description = newPost.description
          post.content.tags = newPost.tags
          await data.posts.unshift(post)
          localStorage['__data__'] = JSON.stringify(data)
          context.commit('addPosts', data.posts)
      },

        async deletePost({ commit }, id) {
            let data = JSON.parse(localStorage.getItem('__data__'))  // есть ли в localStorage __data__
            data.posts = await data.posts.filter(x=>x.id !== id)
            console.log(data)
            localStorage['__data__'] = JSON.stringify(data)
            commit('addPosts', data.posts)
        }

        //     const post = await this.dispatch('getPostById', id)   // ищем пост

        //     post.description = data.description   //редактируем
        //     post.tags = data.tags
        //     post.src = data.src

        //     localStorage.setItem('__data__', 
        //     JSON.stringify(state.posts))  // сохраняем
        // },
     

        /////////////////////////////////////////////////////////////
        // дальше нейн код
        /////////////////////////////////////////////////////////////

    //  async updatePost2({state, dispatch}, postData) {
    //         console.log(postData)
    //         const post = await dispatch('getPostById', postData.id) // ищем пост
            
    //         post.description = postData.description // редактируем
    //         post.tags = postData.tags

    //         localStorage.setItem('__data__', JSON.stringify(state.posts))  // сохраняем
    //         console.log(state.posts)
    //     }
    }
})