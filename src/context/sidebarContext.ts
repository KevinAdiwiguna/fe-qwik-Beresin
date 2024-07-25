import { createContextId } from "@builder.io/qwik";

import type { Signal } from "@builder.io/qwik";

export const SidebarContext =
  createContextId<Signal<boolean>>("SidebarContext");
