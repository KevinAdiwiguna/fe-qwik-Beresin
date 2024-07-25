import {  component$, Slot, useComputed$ } from "@builder.io/qwik";
import { cn } from "~/lib/utils";


import type { ButtonHTMLAttributes } from "@builder.io/qwik";

enum ButtonVariant {
    "solid" = "solid",
    "outline" = "outline",
    "ghost" = "ghost",
}

enum ButtonSize {
    "small" = "small",
    "medium" = "medium",
    "large" = "large",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: keyof typeof ButtonVariant;
    size: keyof typeof ButtonSize;
    block?: boolean;
    customClass?: string
}

export const Button = component$((props: ButtonProps) => {
    const { size, variant, block, customClass, ...rest } = props

    const variantClass = useComputed$(() => {
        switch (variant) {
            case "solid":
                return "bg-[#CF881D]";

            case "outline":
                return "bg-white border-2 border-[#CF881D]";

            case "ghost":
                return "border-2 bg-transparent";
        }
    });

    const sizeClass = useComputed$(() => {
        switch (size) {
            case "small":
                return "px-2 py-1 text-xs focus:ring-2 active:ring-2 gap-x-1";

            case "medium":
                return "px-4 py-2 text-sm focus:ring active:ring gap-x-2";

            case "large":
                return "px-6 py-3 text-base focus:ring-4 active:ring-4 gap-x-3";
        }
    });


    return (
        <button
            {...rest}
            class={cn(`items-center rounded-full ${customClass} ${variantClass.value} ${sizeClass.value}`, customClass, {
                "flex w-full justify-center": block,
                "inline-flex": !block
            })}
        >
            <Slot name="firstIcon" />
            <Slot />
            <Slot name="lastIcon" />
        </button>
    )
})