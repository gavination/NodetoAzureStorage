import { Router } from 'express';
import * as reportsController from '../controllers/ReportsController';

const reportsRouter = Router();

reportsRouter.get('/', reportsController.getReports);

export default reportsRouter;
