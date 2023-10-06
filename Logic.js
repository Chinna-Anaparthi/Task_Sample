const Database = require("./Database")

const DataPost = async (req, res) => {
    try {
        const newUser = new Database({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const DataGet = async (req, res) => {
    try {
        const users = await Database.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports={DataGet,DataPost}