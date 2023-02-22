const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('phongtro123', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối DB thành công!');
    } catch (error) {
        console.error('Kết nối DB có vấn đề:', error);
    }
}

export default connectDatabase