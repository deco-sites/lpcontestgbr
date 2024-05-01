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
      <div>
        {menus && menus.map(menu => (
          <div>
            {menu.menuText}
          </div>

        ))}
      </div>

      <div class="">
        <div>
          <h2>{menus[activeMenuIndex].title}</h2>
          <p>{menus[activeMenuIndex].content}</p>
        </div>

        <Image
          src={menus[activeMenuIndex].image.src}
          alt={menus[activeMenuIndex].image.alt}
          width={326}
          height={436}
        />
      </div>
    </div>
  )
}

export default TabbedMenu
