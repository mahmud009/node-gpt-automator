import { Request, Response, NextFunction } from "express";
import { NodeEnvs } from "src/common/constants";
import Env from "src/common/Env";
import logger from "jet-logger";
import HttpStatusCodes from "src/common/HttpStatusCodes";
import { RouteError } from "src/common/route-error";

export function routeErrorMiddleware(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (Env.NodeEnv !== NodeEnvs.Test) logger.err(err, true);
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).send({ error: err.message });
  }
  return next(err);
}
