import User from "../models/User.js"



///UPDATE 

export const updateUser = async (req, res, next) => {

    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateduser)

    } catch (err) {
        next(err)
    }
}

///DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).send("User has been deleted")
    } catch (err) {
        next(err)
    }


}

///GET 
export const getUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)

    } catch (err) {
       next(err)
    }

}

///GET ALL 

export const allUser = async (req, res, next) => {

    try {
        const users = await User.find()
        res.status(200).json(users)

    } catch (err) {
        next(err)
    }

}

