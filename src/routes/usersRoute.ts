import { Router } from "express"

 const router = Router()

router.get('/' , (req : any, res : any)  => {
    res.send('All Users')
})

router.post('/' , (req : any, res : any)  => {
    res.send('Create a Users')
})

router.put('/:id' , (req : any, res : any)  => {
    res.send(`Update a Users ${req.id}`)
})
router.put('/:id' , (req : any, res : any)  => {
    res.send(`delete a Users ${req.id}`)
})
export default router
