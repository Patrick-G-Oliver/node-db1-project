const express = require("express")
const db = require("../data/dBConfig.js")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        // translates to 'SELECT * FROM accounts;'
        const accounts = await db.select("*").from("accounts")
        res.json(accounts)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        // translates to 'SELECT * FROM accounts WHERE id = ? LIMIT 1;'
        const message = await db
            .select("*")
            .from("accounts")
            .where("id", req.params.id)
            .limit(1)

        res.json(message)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget,
        }

        if (!payload.name || !payload.budget) {
            return res.status(400).json({
                message: "need an account name and budget"
            })
        }

        // translates to 'INSERT INTO accounts (name, budget) VALUES (?, ?);'
        const [id] = await db.insert(payload).into("accounts")
        const account = await db
            .first("*") // a shortcut for destructuring the array and limit 1
            .from("accounts")
            .where("id", id)

        res.status(201).json(account)
    } catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget,
        }

        if (!payload.name || !payload.budget) {
            return res.status(400).json({
                message: "need an account name and budget"
            })
        }

        // translates to 'UPDATE accounts SET name = ? AND budget = ? WHERE id = ?;'
        await db("account").where("id", req.params.id).update(payload)

        const account = await db
            .first("*") // a shortcut for destructuring the array and limit 1
            .from("accounts")
            .where("id", req.params.id)

        res.json(req.body)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        // tranlates to 'DELETE FROM accounts WHERE id = ?;'
        await db("accounts").where("id", req.params.id).del()

        // there is no longer a resource to return, but it was deleted successfully 
        // (204 means success but empty response)
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router