module.exports =(connection,Sequelize) => {
    class Article extends Sequelize.Model{}
    Article.init(
        {
            _id:{
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey : true,
            },
            title :{
                type:Sequelize.STRING,
            },
            game:{
                type:Sequelize.STRING,
            },
            author :{
                type: Sequelize.STRING,
            },
            publish_date:{
                type : Sequelize.STRING,
            },
            
        },
        {sequelize : connection}
    );
    return Article;
};