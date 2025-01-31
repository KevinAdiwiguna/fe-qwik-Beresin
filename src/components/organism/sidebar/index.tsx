import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// Constants
import { LINK } from "~/constant/link";
// Image
import Logo from '~/media/image/logo.png?jsx'
// Icons
import { ThreeBars } from "~/media/svg/three-bars";
// Context 
import { SidebarContext } from "~/context/sidebarContext";
// Components
import { Button } from "~/components/atom/button";
// Hooks
import { useScroll } from "~/hooks/useScroll";

export const Sidebar = component$(() => {
    const isSidebarOpen = useContext(SidebarContext);
    const hasScrolled = useScroll();

    return (
        <div class={`fixed top-0 w-full py-3 h-fit px-4 space-y-3 md:hidden z-50 ${isSidebarOpen.value && "bg-white"} ${hasScrolled.value ? "duration-300 bg-white border-b border-gray-500" : ""}`}>
            <div class="flex justify-between items-center">
                <div class="flex justify-center items-center gap-x-3">
                    <Logo class="max-w-[50%]" />
                    <p class={`capitalize text-white font-bold text-2xl ${hasScrolled.value ? "duration-300 !text-black" : "text-white"} ${isSidebarOpen.value && "!text-black"} `}>beresin</p>
                </div>
                <div onClick$={() => isSidebarOpen.value = !isSidebarOpen.value}>
                    <ThreeBars font-size={25} />
                </div>
            </div>

            <div class={`${!isSidebarOpen.value ? 'hidden' : "block"}`}>
                <div class={`flex-col gap-2 flex`}>
                    {LINK.map((res, key) => {
                        return (
                            <Link key={key} href={res.url} onClick$={() => isSidebarOpen.value = !isSidebarOpen.value}>{res.name}</Link>
                        )
                    })}
                </div>

                <div class="flex items-center justify-center gap-x-4 mt-3">
                    <Link href="/sign-in">
                        <Button variant="outline" size="medium">Sign in</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button variant="solid" size="medium" customClass="text-white">Sign up</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
});
