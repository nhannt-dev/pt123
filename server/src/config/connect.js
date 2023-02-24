const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
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