// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js';
import Pusher from 'pusher'
import cors from 'cors'

// app config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1204557",
    key: "49ec8537a8b9f00efd87",
    secret: "e2961d82421785c2f1a5",
    cluster: "ap2",
    useTLS: true
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url = "mongodb+srv://admin:ZNDZaFnzVzqXD1Dn@cluster0.d4ng3.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once("open", ()=>{
    console.log("DB Connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change)=>{
        console.log(change);

        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.user,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        }
        else{
            console.log("Error triggering pusher");
        }
    })
})

// ????

// api routes
app.get("/", (req, res)=>{
    res.status(200).send("Hello World");
});

app.post("/messages/new", (req, res)=>{
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
                res.status(201).send(`new message created: \n ${data}`);
        }
    })
})

app.get("/messages/sync", (req, res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

// listener
app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`);
})