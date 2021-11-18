
const path = require('path');

export default function handler(req, res) {
    console.log(req.body)
     res.json({name: 'test'})
}