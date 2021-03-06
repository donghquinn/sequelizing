import { config } from 'dotenv';
config();

import { Sequelize } from 'sequelize';



// connect to the Database
export const initSequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  dialect: 'mariadb',
  logging: console.log
});


export async function authenticate(sequelize: Sequelize) {
  try {
    await sequelize.authenticate();
    console.log("@@@@@@@ You are authenticated!@@@@@@@");
  } catch (err) { 
    if (err instanceof Error) {
      throw err;
    }
  }
}
