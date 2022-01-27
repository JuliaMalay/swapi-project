import { ActionTree } from '~/node_modules/vuex'
import {
  GET_HEROES,
  GET_HERO
} from './consts'
import { HeroState } from '~/store/heroes/state'
const actions: ActionTree<HeroState, any> = {
  async [GET_HEROES] ({ commit }) {
    const { result } = await this.$axios.$get('https://swapi.dev/api/people')
    commit('heroes/setHeroesData', result)
  },
  async [GET_HERO] ({ commit }) {
    const { result } = await this.$axios.$get('https://swapi.dev/api/people/1')
    commit('heroes/setHeroData', result)
  }
}

export default actions
