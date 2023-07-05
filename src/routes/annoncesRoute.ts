import { Router } from "express"

 const router = Router()

router.get('/' , (req : any, res : any)  => {
    res.send('All Annonces')
})

router.post('/' , (req : any, res : any)  => {
    res.send('Create a Annonce')
})

router.put('/:id' , (req : any, res : any)  => {
    res.send(`Update a Annonce ${req.params.id}`)
})
router.delete('/:id' , (req : any, res : any)  => {
    res.send(`delete a Annonce ${req.params.id}`)
})
export default router
