import { Slot, component$, useSignal } from "@builder.io/qwik";

// Icons
import { ArrowUp } from "~/media/svg/arrow-up"
import { ArrowDown } from "~/media/svg/arrow-down"

// Types
export interface AccordionProps {
    opened: boolean;
}

export const Accordion = component$((props: AccordionProps) => {
    const { opened } = props
    const isOpen = useSignal(opened);

    return (
        <div onClick$={() => (isOpen.value = !isOpen.value)} class={`p-4 flex flex-col cursor-pointer ${isOpen.value && 'gap-4'} md:border md:border-white md:rounded-2xl md:bg-gradient-to-r md:from-white md:from-0% md:to-transparent md:to-40%`}>
            <div class="flex justify-between">
                <div class="font-bold text-base md:text-xl flex items-center w-4/5">
                    <Slot name="title" />
                </div>
                <div class="my-auto">
                    {isOpen.value ? (<ArrowUp class="w-10" />) : (<ArrowDown class="w-10" />)}
                </div>
            </div>
            <div>
                <div class="text-sm md:text-base">
                    {isOpen.value && <Slot />}
                </div>
            </div>
        </div>
    );
});