'use strict'

const Database = use('Database')
const Redis = use('Redis')

class UserController {

    async index({ response }) {

        let cachedUsers = await Redis.get('users');

        if(cachedUsers) {
            let users = JSON.parse(cachedUsers);

            return response.status(201).json({
                status: true,
                message: 'fetched all users',
                data: users
            });
        }else {

            let users = await Database.table('users').select('*');
            Redis.publish('users', '');

            return response.status(201).json({
                status: true,
                message: 'fetched all users',
                data: users
            });
        }
    }
}   

module.exports = UserController
