import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// Constants
import { LINK } from "~/constant/link";
// Image
import Logo from '/image/logo.png?jsx'
// Components
import { Button } from "~/components/atom/button";
// Hooks
import { useScroll } from "~/hooks/useScroll";

export const Navbar = component$(() => {
    const hasScrolled = useScroll()

    return (
        <div class={`hidden md:block w-full fixed top-0 py-3 px-4 z-50 ${hasScrolled.value ? "duration-300 bg-white border-b border-gray-500" : ""}`}>
            <div class="flex justify-between items-center">
                <div class="flex justify-center items-center gap-x-3">
                    <Logo class="w-10" />
                    <p class={`capitalize text-white font-bold text-2xl ${hasScrolled.value ? "duration-300 !text-black" : "text-white"}`}>beresin</p>
                </div>
                <div class={`space-x-3 ${hasScrolled.value ? "duration-300 text-black" : "text-white"}`}>
                    {LINK.map((res, key) => {
                        return (
                            <Link key={key} href={res.url} class="uppercase">{res.name}</Link>
                        )
                    })}
                </div>
                <div class="flex items-center justify-center gap-x-2">
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
})