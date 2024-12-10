import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import logger from "jet-logger";
import "express-async-errors";
import { Paths } from "src/common/Paths";
import Env from "src/common/Env";
import { NodeEnvs } from "src/common/constants";
import { SampleRouter } from "./routes/SampleRouter";
import { routeErrorMiddleware } from "./middlewares/routeErrorMiddleware";
import { LogMessages } from "./common/LogMessages";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (Env.NodeEnv === NodeEnvs.Production) app.use(helmet());
if (Env.NodeEnv === NodeEnvs.Dev) app.use(morgan("dev"));

// registering routes
app.use(Paths.Sample.Base, SampleRouter);

// route error handling middleware
app.use(routeErrorMiddleware);

// run the server
app.listen(Env.Port, () => logger.info(LogMessages.System.Started));

export default app;
