'use strict'

const Database = use('Database')

/*
|--------------------------------------------------------------------------
| Redis Subscribers
|--------------------------------------------------------------------------
|
| Here you can register the subscribers to redis channels. Adonis assumes
| your listeners are stored inside `app/Listeners` directory.
|
*/

const Redis = use('Redis')

/**
 * Inline subscriber
 */
Redis.subscribe('users', async () => {
    let users = await Database.table('users').select('*');

    await Redis.set(JSON.stringify(users));
})

/**
 * Binding method from a module saved inside `app/Listeners/News`
 */
// Redis.subcribe('news', 'News.onMessage')
