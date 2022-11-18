import people from "./users.js"

let users = people;

const UserController = (app) => {
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUsersById)
}

const findUsers = (req,res) => {
    const type = req.query.type;
    if(type){
        const usersOfType = users.filter(u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}

const findUsersById = (req,res) => {
    const userId = req.params.uid;
    const user = users.filter(u => u._id === userId);
    res.json(user)
}

export default UserController;