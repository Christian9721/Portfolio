interface IElementCreator {
    text: string;
  }
export const createGradientElement = ({ text }: IElementCreator) => {
return `
    <p class="p-0 m-0 font-bold text-xl">
    <span class="bg-grad bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-xl" style='-webkit-text-fill-color: transparent;'>&#60; &#62;</span>
    <br>
    <span class="rounded-sm bg-neutral-100 dark:bg-neutral-800 inline-flex ml-6 p-2 after:content-[''] after:w-[2px] after:top-0 after:left-[-10px] after:h-full after:bg-grad after:bg-gradient-to-t after:from-sky-400 after:to-blue-500 after:absolute relative">${text}</span>
    <br>
    <span class="bg-grad bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-xl" style='-webkit-text-fill-color: transparent;'>&#60;&#47;&#62;</span>
    </p>
`
}