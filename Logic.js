const Database = require("./Database")

const DataGet = async (req, res) => {
    try {
        const users = await Database.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports={DataGet}