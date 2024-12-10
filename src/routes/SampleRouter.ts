import { Router } from "express";
import { Paths } from "src/common/Paths";

const SampleRouter = Router();

SampleRouter.get(Paths.Sample.Test, (req, res) => {
  res.send("Hello, World!");
});

export { SampleRouter };
