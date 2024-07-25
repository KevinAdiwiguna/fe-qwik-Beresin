import { component$, Slot, useContextProvider, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/organism/footer";
import { Navbar } from "~/components/organism/navbar";
import { Sidebar } from "~/components/organism/sidebar";
import { SidebarContext } from "~/context/sidebarContext";



export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const isSidebarOpen = useSignal(false)

  useContextProvider(SidebarContext, isSidebarOpen)
  return (
    <>
      <main>
        <Sidebar />
        <Navbar />
        <Slot />
        <Footer />
      </main>
    </>
  );
});
