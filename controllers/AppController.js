import { redisClient } from '../utils/redis';
import { dbClient } from '../utils/db';

class AppController {
    static getStatus(request, response) {
        response.status(200).json({ "redis": redisClient.isAlive(), "db": dbClient.isAlive() } )
    }

    static async getStats(request, response) {
        const numUsers = await dbClient.nbUsers();
        const numFIles = await dbClient.numFIles();
        response.status(200).json({ "users": numUsers, "files": numFIles });
    }
    

}

module.exports = AppController;