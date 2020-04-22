import api from "@/api/index"

export default{
    actions: {
        async fetchArticles(ctx){
            const articles = await api.getArticles();
            ctx.commit('updateArticles',articles)
        },
        async fetchCategories(ctx){
            const categories = await api.getCategories();
            ctx.commit('updateCategories',categories)
        }

    },
    mutations:{
        updateArticles(state,articles){
            state.articles = articles
        },
        updateCategories(state,categories){
            state.categories = categories;
        },
        addArticle(state,articles){
            state.articles.push(articles);
        },
        addComment(state,comment){
            // console.log(state.articles.comments);
            state.articles[comment.idArticle].comments.unshift(comment);
        }
    },
    state: {
        articles: [],
        categories: []
    },
    getters:{
        getArticles(state){
            return state.articles
        },  
        getCategories(state){
            return state.categories;
        }
    }
}