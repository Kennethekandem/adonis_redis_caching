'use strict'

const Database = use('Database');

class UserController {

    async index({ response }) {

        let users = await Database.table('users').select('*');

        return response.status(201).json({
            status: true,
            message: 'fetched all users',
            data: users
        });
    }
}

module.exports = UserController
