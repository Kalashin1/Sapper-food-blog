export function post(req, res, next){
    console.log(req.body)
    res.json({message: 'emai recieved!'})
}