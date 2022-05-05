const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    const {headers, body} = req;

    res.send({
        headers,
        body
    })
})

router.post("/", (req, res, next) => {
    const {headers, body} = req;

    res.send({
        headers,
        body
    })

})


router.put("/", (req, res, next) => {
    const {headers, body} = req;

    res.send({
        headers,
        body
    })

})


router.delete("/", (req, res, next) => {
    const {headers, body} = req;

    res.send({
        headers,
        body
    })

})



module.exports = router;