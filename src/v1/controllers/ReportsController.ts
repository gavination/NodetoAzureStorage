import { Request, Response } from 'express';

export function getReports(req: Request, res: Response): Response {
  const reports = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return res.json(reports);
}
