import accueil from './components/accueil'
import crepe from './components/crepe'
import cookie from './components/cookie'
import croissant from './components/croissant'

Vue.component('accueil', accueil)

/**
 * Chaque route est défini par un object literal
 *  - La clé path représente l'url
 *  - La clé component doit être un object literal de component 
 *         Ce qui irait habituellement dans Vue.component('nom', _____)
 */
export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path: '/crepe/', component: crepe },
        { path: '/cookie/', component: cookie },
        { path: '/croissant/', component: croissant },
    ]
})