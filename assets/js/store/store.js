import Vue from "vue/dist/vue.js"
import Vuex from "vuex"

Vue.use(Vuex)
/***
*   {
*     1:{
        id:1,
        username: "ValdoR"
        unread: 2,
        count:100
        messages: [
          {
            id: 22,
            from_id: 3
            to_id:1
          },
        ]
      }

*   }
*/

const store = new Vuex.Store({
  strict:true,
  state: {
    contactLoader: false,
    conversationLoader: false,

    conversations: {}
  },

  getters:{
    getContactLoader: (state) => {
      return state.contactLoader
    },

    getConversationLoader: (state) => {
      return state.conversationLoader
    }

  },

  mutations: {
    SWITCH_CONTACT_LOADER(state) {
      state.contactLoader = !state.contactLoader
    },

    SWITCH_CONVERSATION_LOADER(state) {
      state.conversationLoader = !state.conversationLoader
    }

  },
  actions: {
    switchContactLoader({commit, dispatch,  getter , rootGetter}, {payload} ) {
      commit(SWITCH_CONTACT_LOADER)
    },

    switchConversationLoader({commit, dispatch,  getter , rootGetter}, {payload} ) {
      commit(SWITCH_CONVERSATION_LOADER)
    }
  }
})

export default store
