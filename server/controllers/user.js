const axios = require('axios')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const profilePic = `https:robohash.org/${username}.png`
        const db = req.app.get('db')
        const result = await db.user.find_user_by_username([username])
        const existingUser = result[0]
        if (existingUser) {
            return res.status(409).send('Username already in use')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const registeredUser = await db.user.create_user(
            [username, hash, profilePic]
        )
        const user = registeredUser[0]
        req.session.user = {
            username: user.username,
            id: user.user_id,
            profilePicture: user.profile_pic
        }
        return res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const { username, password } = req.body
        const foundUser = await req.app.get('db').user.find_user_by_username([username])
        const user = foundUser[0]
        if (!user) {
            return res.status(404).send('User not found. Please register as a new user before logging in.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if (!isAuthenticated) {
            return res.status(401).send('Incorrect Credentials')
        }
        req.session.user = {
            id: user.user_id,
            username: user.username,
            profilePicture: user.profile_pic
        }
        console.log(req.session.user)
        return res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        return res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}