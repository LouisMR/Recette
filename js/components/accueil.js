import tpl from '../avecTemplateHtml'

export default tpl({
    template: 'accueil.html',
    data: function() {
        return {
            recipes: [],
            thumbnail1: [],
            titre1: [],
            thumbnail2: [],
            titre2: [],
            thumbnail3: [],
            titre3: [],
            accueil: "accueil!",
            recipe: "",
            id: []
        }
    },
    mounted() {
        const url = "http://mysql.julienduranleau.com/synthese/recettes.json"

        fetch(url).then(resp => {
            resp.json().then(data => {
                this.recipes = data.recettes
                this.thumbnail1 = data.recettes[0].thumbnail
                this.titre1 = data.recettes[0].titre
                this.thumbnail2 = data.recettes[1].thumbnail
                this.titre2 = data.recettes[1].titre
                this.thumbnail3 = data.recettes[2].thumbnail
                this.titre3 = data.recettes[2].titre
            })
        })
    },

    methods: {
        recette(e) {
            e.preventDefault()
            this.$router.push({
                path: '/recettes/:id'
            })
        }
    }
    
})