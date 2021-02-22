const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

const { Chat, Message } = require('./db/models'); 

//load middleware
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


/***
 * GET /chat
 * Purpose: get all chats
*/
app.get('/chats', (req,res) => {
    Chat.find().then((chats) => {
        res.send(chats);
    }).catch((e) => {
        res.send(e);
    })
})



/***
 * POST /chat
 * Purpose: get all chats
*/
app.post('/chats', (req, res) => {
    //we want to create a new chat and return the new  chat document to the user (which includes the id)
    let title = req.body.title;
    let newChat = new Chat({
        title
    });
    newChat.save().then((chatDoc) => {
        //full chat document returned
        res.send(chatDoc);
    })
})



/***
 * GET /chat/:chatId/messages
 * Purpose: get all chats
*/
app.get('/chats/:chatId/', (req, res) => {
    //we want to return all messages that belong to a specific chat
    Message.find({
        _chatId: req.params.chatId
    }).then((messages) => {
        res.send(messages);
    })
});



/***
 * POST /chat/:chatId/messages
 * Purpose: create a new message in a specific chat
*/
app.post('/chats/:chatId/', (req, res) => {
    //we want to create a new chat and return the new  chat document to the user (which includes the id)
    let newMessage = new Message({
        title: req.body.title,
        _chatId: req.params.chatId,
        _leftside: req.body.leftside,
    });
    console.log(req.body.leftside);
    newMessage.save().then((newMessageDoc) => {
        //full chat document returned
        res.send(newMessageDoc);
    })
});




/***
 * LISTENING
*/
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})