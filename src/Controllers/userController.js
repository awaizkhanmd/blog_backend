import UserModel from "../Models/UserModel.js";
import Validation from "../Validation/Validation.js";
const CreateUser = async (req, res) => {

    try {
        let data = req.body
        if (!Validation.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "User body should not be empty" });
        }

        if (!data.firstName) return res.status(400).send({ status: false, message: "firstName is required" });

        if (!data.lastName) return res.status(400).send({ status: false, message: "lastName is required" });

        if (!data.title) return res.status(400).send({ status: false, message: "title is required" });

        if (!data.email) return res.status(400).send({ status: false, message: "email is required" });

        if (!data.password) return res.status(400).send({ status: false, message: "password is required" });

        const find = await UserModel.findOne({ email: email })
        if (find) res.status(404).send({ status: false, msg: "This email already exists" })

        const CreatedData = await UserModel.create(data)
        res.status(201).send({ msg: CreatedData })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

export default CreateUser;


