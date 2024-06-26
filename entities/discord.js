const DiscordBot = require('discord.js-selfbot-v13');

class Discord {
    static #instance = null;
    #client = null;
    #discordSchema = null;

    #isRunning = false;

    constructor() {
        this.#client = new DiscordBot.Client();

        this.#discordSchema = require('../schemas/discord.schema');
    }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Discord();
        }
        return this.#instance;
    }

    async getActivities() {
        return await this.#discordSchema.findOne({key: 'activity'});
    }

    async setActivities(activities) {
        try {
            return await this.#discordSchema.updateOne({key: 'activity'}, {value: JSON.stringify(activities)}, {upsert: true});
        }
        catch (err) {
            throw err;
        }
    }

    async login(token) {
        try {
            await this.#client.login(token);
            return true;
        } catch (err) {
            throw err;
        }
    }

    async start(isRestart = false) {
        if (!this.#isRunning || isRestart) {
            // get activity from database
            const activity = await this.getActivities();
            const activities = JSON.parse(activity.value);

            this.#isRunning = true;
            await this.#client.on('ready', () => {
                const newActivities = this.createNewActivity(activities);
                this.#client.user.setActivity(newActivities);
                this.#client.user.setPresence({ status: "dnd" });
            });
        }

        return this.#isRunning;
    }

    stop() {
        this.#isRunning = false;
        this.#client.destroy();
    }

    createNewActivity(activities) {
        const activity = new DiscordBot.RichPresence()
            .setType(activities.type)
            .setURL(activities.url)
            .setState(activities.state)
            .setName(activities.name)
            .setDetails(activities.details)
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(activities.largeImage)
            .setAssetsSmallImage(activities.smallImage);

        // set buttons
        activities.buttons.forEach(button => {
            activity.addButton(button.label, button.url);
        });

        return activity;
    }
}

module.exports = Discord;