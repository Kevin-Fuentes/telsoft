import { Router } from 'express';
import { getProduct ,postProduct,putProduct,deleteProduct} from '../../controller/product/index.js'
import {validateBody,validateID} from '../../middleware/product/index.js'
const router = Router();

router.get('/', getProduct)
router.post('/',validateBody, postProduct)
router.put('/:id',validateID, putProduct)
router.delete('/:id',validateID, deleteProduct)

export default router;