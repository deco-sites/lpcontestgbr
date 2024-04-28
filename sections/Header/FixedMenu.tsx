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
    { text: "Start", sectionId: "" },
    { text: "My work", sectionId: "" },
    { text: "Contact", sectionId: "" }
  ]} />
}

function FixedMenu({ menus }: FixedMenuProps) {
  return (
    <nav class="fixed w-full">
      <ul className="flex flex-row justify-center gap-2 w-full wx-auto py-2 text-sm font-serif text-theme-dark-beige cursor-pointer">
        {menus && menus.map(menu => (
          <li>
            <a href={`#${menu.sectionId}`}>
              {menu.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FixedMenu
