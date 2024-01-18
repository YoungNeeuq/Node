class NewsController{
    //GET NEWS
    index(req, res){
        res.render('news')
    }

    //GET Slug
    show(req, res){
        res.send('news detail')
    }
}
module.exports = new NewsController;