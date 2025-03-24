import type { AppRouteHandler } from "@/lib/types";

import type { List } from "./tasks.routes";

export const list: AppRouteHandler<List> = (c) => {
  return c.json([
    {
      name: "Task 1",
      done: false,
    },
    {
      name: "Task 2",
      done: true,
    },
  ]);
};
