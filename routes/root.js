import express from 'express';
import {getValueMeters} from '../rest-api/controller/value-controller';
const router = express.Router();

router.get('/v1/value/meters', getValueMeters);

module.exports = router;
