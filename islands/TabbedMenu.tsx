import { useSignal } from '@preact/signals'
import Image from "apps/website/components/Image.tsx";
import { MenuProps } from "site/sections/Content/Services.tsx";

export interface Props {
  menus: MenuProps[]
}

function TabbedMenu({ menus }: Props) {
  const activeMenuIndex = useSignal(0)

  return (
    <div class="lg:flex lg:max-w-7xl">
      <div class="flex justify-between lg:flex-col">
        {menus && menus.map((menu, index) => (
          <span
            class={`p-3 lg:p-6 lg:text-right text-sm lg:text-xl cursor-pointer text-theme-dark-brown
             ${index === activeMenuIndex.value && 'bg-white border border-b-0 lg:border-b lg:border-r-0 border-theme-gray rounded-t-md lg:rounded-l-md'}`}
            onClick={() => activeMenuIndex.value = index}
          >
            {menu.menuText}
          </span>
        ))}
      </div>

      <div class="bg-white border border-theme-gray h-[630px] lg:h-96 p-6 flex flex-col lg:flex-row items-center gap-5 rounded-b-md">
        <div class="flex flex-col flex-1 lg:max-w-lg gap-6">
          <h2 class="text-2xl lg:text-4xl font-serif text-theme-dark-brown text-center">
            {menus[activeMenuIndex.value].title}
          </h2>
          <p class="font-light text-theme-dark-brown">
            {menus[activeMenuIndex.value].content}
          </p>
        </div>

        <div class="w-72 lg:w-80 h-48 lg:h-72 overflow-hidden flex justify-center items-center rounded-sm">
          <Image
            class="max-w-none"
            src={menus[activeMenuIndex.value].image.src}
            alt={menus[activeMenuIndex.value].image.alt}
            width={371}
            height={495}
          />
        </div>
      </div>
    </div>
  )
}

export default TabbedMenu
