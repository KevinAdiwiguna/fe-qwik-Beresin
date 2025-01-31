import { QwikIntrinsicElements } from "@builder.io/qwik";

export function ArrowUp(props: QwikIntrinsicElements['svg'], key: string) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="#888888" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"></path></svg>
    )
  }