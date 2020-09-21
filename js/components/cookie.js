import tpl from '../avecTemplateHtml'

export default tpl({
    template: 'cookie.html',
    data() {
        return {
            id: [],
            recettes: [],
            titre: [],
            source: [],
            image: [],
            temps_preparation: [],
            temps_cuisson: [],
            temps_attente: [],
            total: [],
            ingredients: [],
            preparations: [],
            commentaires: [],
            congele: [],
            secongele: "Se Congèle",
            voteRecette: [],
            voteAjouter: [],
            ajoutVote: "http://mysql.julienduranleau.com/synthese/votes/vote.php?id=1",
            etoile: "../images/star.png",
            etoiles: [],
        }
    },

    mounted() {
        const url = "http://mysql.julienduranleau.com/synthese/recettes.json"
        
        fetch(url).then(resp => {
            resp.json().then(data => {
                this.recettes = data.recettes
                for(let i = 0; i < data.recettes.length; i++) {
                    this.titre = data.recettes[1].titre
                    this.id = data.recettes[1].id
                    this.source = data.recettes[1].source
                    this.image = data.recettes[1].image
                    this.temps_preparation = data.recettes[1].temps_preparation
                    this.temps_cuisson = data.recettes[1].temps_cuisson
                    this.temps_attente = data.recettes[1].temps_attente
                    var additionTotal = this.temps_preparation + this.temps_cuisson + this.temps_attente

                    var hours = (additionTotal / 60);
                    var rhours = Math.floor(hours);
                    var minutes = (hours - rhours) * 60;
                    var rminutes = Math.round(minutes);
                    if (rminutes == 0) {
                        this.total = rhours + "h"
                    } else {
                        this.total = rhours + "h" + rminutes + "m"
                    }

                    this.ingredients = data.recettes[1].ingredients
                    this.preparations = data.recettes[1].preparation
                    this.commentaires = data.recettes[1].commentaires
                    this.etoiles = data.recettes[1].etoiles
                    this.congele = data.recettes[1].se_congele
                }
            })
        })

        const vote = "http://mysql.julienduranleau.com/synthese/votes/vote.php?id=1"

        fetch(vote).then(resp => {
            resp.json().then(data => {
                    this.voteRecette = data.data
            })
        })
    }, //end mounted

    methods: {
        voter() {
            http_post(ajoutVote, + 1, {
            }).then(data => {
                if (data.success) {
                    this.ajoutVote = this.ajoutVote + 1
                }
            })
        },
    } // end methods
})