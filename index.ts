import express , { Request, Response , Express} from "express";

const app : Express = express();
const port : number | string = process.env.PORT || 3000;

app.get("/", (req : Request , res : Response) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})