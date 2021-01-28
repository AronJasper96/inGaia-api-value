import express from 'express';
import {getValueMeters} from '../rest-api/controller/value-controller';
import {check} from '../rest-api/controller/health-controller';
const router = express.Router();

router.get('/', check);
router.get('/v1/value/meters', getValueMeters);

module.exports = router;
