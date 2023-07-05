import { Router } from "express"
import   {PrismaClient}  from '@prisma/client'
 
const prisma = new PrismaClient()

 const router = Router()

 

router.get('/' , async (req : any, res : any)  => {
    const Annonces = await prisma.annonce.findMany()
    res.send(Annonces)
})
router.get('/:id' , async (req , res )  => {
    const {id} = req.params
    const Annonce = await prisma.annonce.findUnique({where : {id : Number (id)}})
    res.send(Annonce)
})

router.post('/' , async (req : any, res : any)  => {

    const  {
        title,
        description,
        price,
        city,
        salaray,
        image
    } = req.params

    

    const result  = await prisma.annonce.create({

        
        data : {
        title,
        description,
        price,
        city,
        salaray,
        image
        } as any
    }) 
    res.send(result)
})

router.put('/:id' , (req : any, res : any)  => {
    res.send(`Update a Annonce ${req.params.id}`)
})
router.delete('/:id' , (req : any, res : any)  => {
    res.send(`delete a Annonce ${req.params.id}`)
})
export default router
