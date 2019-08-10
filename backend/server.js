const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = "mongodb+srv://justinsian:Lp5GwtXfnXJRIz16@cluster0-jypkg.azure.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "budget_buddy_data";

app.listen(3000, () => {
    const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true });
    client.connect(error => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

    // write requests
    app.post("/add_user", (request, response) => {
        collection = database.collection("users");
        collection.insertOne(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    });

    app.post("/add_group", (request, response) => {
        collection = database.collection("group");
        collection.insertOne(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    });

    app.post("/add_transaction", (request, response) => {
        collection = database.collection("group");
        collection.insertOne(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    });

    // read requests
    app.get("/user/:id", (request, response) => {
        collection = database.collection("users");
        collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });
});

