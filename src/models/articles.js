const sequelize = require("../configs/sequelize");

module.exports =(connection, Sequelize) => {
    class Articles extends Sequelize.Model{}
  
        Articles.init(
            {
                _id:{
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV1, 
                    primaryKey : true,
                },
                title :{
                    type:Sequelize.STRING,
                },
                text :{
                    type: Sequelize.STRING,
                },
                game :{
                    type:Sequelize.STRING,
                },
                author :{
                    type: Sequelize.STRING,
                },
                publish_date :{
                    type : Sequelize.STRING,
                },
           },
            {sequelize : connection}
            
        )
    
    return Articles
};
    
