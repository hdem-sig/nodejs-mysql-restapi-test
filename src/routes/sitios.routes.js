import {Router} from 'express'
import {getSitios, createSitios, updateSitios, deleteSitios, getSitio} from '../controllers/sitios.controllers.js'
const router = Router ()

router.get('/sitios', getSitios)
router.get('/sitios/:id', getSitio)
router.post('/sitios', createSitios )
router.patch('/sitios/:id',  updateSitios)
router.delete('/sitios/:id', deleteSitios)

export default router
