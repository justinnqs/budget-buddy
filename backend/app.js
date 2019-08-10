const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = "mongodb+srv://justinsian:Lp5GwtXfnXJRIz16@cluster0-jypkg.azure.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "sample_airbnb";

app.listen(3000, () => {
    const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true });
    client.connect(error => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("listingsAndReviews");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});