import { Router } from "express"
import   {PrismaClient}  from '@prisma/client'
 
const prisma = new PrismaClient()

 const router = Router()

 

router.get('/' , async (req : any, res : any)  => {
    const users = await prisma.user.findMany()
    res.send(users)
})
router.get('/:id' , async (req , res )  => {
    const {id} = req.params
    const user = await prisma.user.findUnique({where : {id : Number (id)}})
    res.send(user)
})

router.post('/' , async (req : any, res : any)  => {
        res.setHeader('Content-Type', 'application/json');
    const  {
        name,
        email,
      username,
      image,
      bio,
      phoneNumber,
      passwordHash
    } = req.params

    
        try {
            const result  = await prisma.user.create({

        
                data : {
                    name,
                    email,
                  username,
                  image,
                  bio,
                  phoneNumber,
                  passwordHash
                } as any
            }) 
            res.json(result)
        } catch (error) {
            res.json({error})
        }
   
})

router.put('/:id' , async(req : any, res : any)  => {
    const {id} = req.params
    const {name , email , username , bio , phoneNumber , passwordHash} = req.body
    try {
        // update an existing record
        const updateUser = await prisma.user.update({
            where : {id : Number (id)},
            data : {
                name,
                email,
                username,
                bio,
                phoneNumber,
                passwordHash
            } as any
        })
        
        res.json(updateUser)
    } catch (error) {
        res.status(400).json({error})
    }
    
})
router.delete('/:id' , async (req : any, res : any)  => {
    const {id} = req.params     
    await prisma.user.delete({ where:{ id :Number(id)}})
     
})


export default router
