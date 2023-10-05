import { Sequelize } from 'sequelize-typescript';

export const DatabaseService = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
