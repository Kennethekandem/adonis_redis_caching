// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

    public async index() {
        
        const users = await Database.query().select('*').from('users');
        return users;
    }
}
