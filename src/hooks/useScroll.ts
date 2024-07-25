import { useSignal, useOnWindow, $ } from "@builder.io/qwik";

export function useScroll(threshold: number = 2) {
    const hasScrolled = useSignal(false);

    useOnWindow('scroll', $(() => {
        if (window.scrollY > threshold) {
            hasScrolled.value = true;
        } else {
            hasScrolled.value = false;
        }
    }));

    return hasScrolled;
}
