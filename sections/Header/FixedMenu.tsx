import Theme from "apps/website/components/Theme.tsx";

interface FixedMenuProps {
  menus: {
    text: string,
    sectionId: string
  }[]
}

export function ErrorFallback({ error }: { error?: Error }) {
  console.error(`Error on FixedMenu: ${error}`)

  return <FixedMenu menus={[
    { text: "Start", sectionId: "hero" },
    { text: "My work", sectionId: "easelGallery" },
    { text: "Contact", sectionId: "getInTouch" }
  ]} />
}

function FixedMenu({ menus }: FixedMenuProps) {
  return (
    <nav class="fixed w-full z-50">
      <ul className="flex flex-row max-w-72 mx-auto rounded-lg bg-theme-transparent-black justify-center gap-2 lg:gap-4 w-full wx-auto px-4 py-2 text-sm lg:text-base font-serif text-theme-gray mt-3 cursor-pointer">
        {menus && menus.map(menu => (
          <li>
            <a  class="hover:text-theme-light-beige transition-all"
                href={`#${menu.sectionId.trim()}`}
            >
              {menu.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FixedMenu
