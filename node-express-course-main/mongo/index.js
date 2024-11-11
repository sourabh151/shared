const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://sourabh:nodeExpressCourse@nodeexpresscourse.jikfk.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressCourse";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        await client.db("blog");
        // await client.db.createCollection("posts");
        // await client.db.createCollection("users");
        // db.posts.insertOne({
        //     title: "Introduction to MongoDB",
        //     content: "MongoDB is a NoSQL database.",
        //     author: "John Doe",
        //     tags: ["mongodb", "nosql", "database"]
        // });
        // console.log(client);
        //await client.db.movies({"name":"jumanji"});
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
