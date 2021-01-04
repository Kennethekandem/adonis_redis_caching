/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Redis from '@ioc:Adonis/Addons/Redis'
import Database from '@ioc:Adonis/Lucid/Database'

Redis.subscribe('user', () => {
    const users = Database.query().select('*').from('users');

    Redis.set('orders', JSON.stringify(users));
})
