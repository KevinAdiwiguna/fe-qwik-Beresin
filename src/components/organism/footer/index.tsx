import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LINK } from "~/constant/link";


// Image
import Logo from "~/media/image/logo.png?jsx"

export const Footer = component$(() => {
    return (
        <>

            <footer class="relative bg-blueGray-200 pt-8 pb-6">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                        <div class="w-full lg:w-6/12 px-4">
                            <h4 class="text-3xl fonat-semibold text-blueGray-700"><Logo />Let's keep in touch!</h4>
                            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="flex flex-wrap items-top mb-6">
                                <div class="w-full lg:w-4/12 px-4 ml-auto">
                                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul class="list-unstyled">
                                        {LINK.map((res, key) => {
                                            return (
                                                <li key={key}>
                                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={res.url}>{res.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div class="w-full lg:w-4/12 px-4">
                                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Social</span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Instagram</Link>
                                        </li>
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Facebook</Link>
                                        </li>
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Tiktok</Link>
                                        </li>
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Whatsapp</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-full lg:w-4/12 px-4">
                                    <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Address</span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">123 Ave, Lorem City, Site Country, the World</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-blueGray-300" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span> <Link href="" class="text-blueGray-500 hover:text-gray-800" target="_blank">Beresin by</Link> <Link href="" class="text-blueGray-500 hover:text-blueGray-800">Kevin Adiwiguna</Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
});