const { default: axios } = require('axios')
const express = require('express')
const { route } = require('./categories')
const router = express.Router()

router.get('/login', async (req, res) => {
    const infor = {
        username: process.env.goship_username,
        password: process.env.goship_password,
        client_id: process.env.goship_client_id,
        client_secret: process.env.goship_client_secret,
    }
    try {
        const token = await axios.post(
            'https://sandbox.goship.io/api/v2/login',
            infor,
        )
        res.status(200).json(token.data?.access_token)
        // if (token.state === 200) {
        //     console.log(token.data)
        //     res.status(200).json(token.data)
        // }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/rates', async (req, res) => {
    const token = req.body.token
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    const infor = {
        shipment: {
            address_from: {
                city: 100000,
                district: 100900,
            },
            address_to: {
                city: 100000,
                district: 100200,
            },
            parcel: {
                cod: 500000,
                weight: 220,
                height: 15,
                width: 10,
                length: 15,
            },
        },
    }
    try {
        const responsed = await axios.post(
            'http://sandbox.goship.io/api/v2/rates',
            infor,
            config,
        )
        if (responsed.status == 200) {
            res.status(200).json(responsed.data)
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router
