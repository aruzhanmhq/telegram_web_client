const express = require("express");
const models = require('../Models');
const usersRouter = express.Router();
const telegramBot = require("../modules/telegramBot")

usersRouter.get('/', async (req, res) => {
    let users = await models.User.find({});
    res.send(users);
});

usersRouter.put('/', async(res, req) => {
    const {_id, fullName, chatId} = req.body;

    await models.User.findByIdAndUpdate(_id, {fullName, chatId})
    res.status(200).send('user updated')
})

usersRouter.post('/sendMessage', (req, res) => {
    const { chatId, message} = req.body;
    telegramBot.sendMessage(chatId, message);
    res.status(200).send("message sent")
})

module.exports = usersRouter;