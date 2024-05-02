import { useSignal } from '@preact/signals'
import Image from "apps/website/components/Image.tsx";
import { MenuProps } from "site/sections/Content/Services.tsx";

export interface Props {
  menus: MenuProps[]
}

function TabbedMenu({ menus }: Props) {
  const activeMenuIndex = useSignal(0)

  return (
    <div class="">
      <div class="flex justify-between">
        {menus && menus.map((menu, index) => (
          <span
            class={`p-3 text-sm text-theme-dark-brown
             ${index === activeMenuIndex.value && 'bg-white border border-b-0 border-theme-gray rounded-t-md'}`}
            onClick={() => activeMenuIndex.value = index}
          >
            {menu.menuText}
          </span>
        ))}
      </div>

      <div class="bg-white border border-theme-gray h-[630px] p-6 flex flex-col items-center gap-5 rounded-b-md">
        <div class="flex flex-col flex-1 gap-6">
          <h2 class="text-2xl font-serif text-theme-dark-brown text-center">
            {menus[activeMenuIndex].title}
          </h2>
          <p class="font-light text-theme-dark-brown">
            {menus[activeMenuIndex].content}
          </p>
        </div>

        <div class="w-72 h-48 overflow-hidden flex justify-center items-center rounded-sm">
          <Image
            class="max-w-none"
            src={menus[activeMenuIndex].image.src}
            alt={menus[activeMenuIndex].image.alt}
            width={326}
            height={436}
          />
        </div>
      </div>
    </div>
  )
}

export default TabbedMenu
