import Env from "./Env";

export const LogMessages = {
  System: {
    Started: `Express server is running on http://localhost:${Env.Port}`,
  },
} as const;
