import { ImageWidget } from "apps/admin/widgets.ts";
import TabbedMenu from "site/islands/TabbedMenu.tsx";

export interface MenuProps {
  title: string
  menuText: string
  /**@format textarea */
  content: string
  image: {
    src: ImageWidget
    /**@default Gabriel's art */
    /**@title */
    alt: string
  }
}
export interface Props{
  firstMenu: MenuProps
  secondMenu: MenuProps
  thirdMenu: MenuProps
}

function Services({ firstMenu, secondMenu, thirdMenu }: Props) {
  return (
    <section class="bg-theme-offwhite py-16 px-2">
      <h2>Offered Creations</h2>

      <TabbedMenu menus={[firstMenu, secondMenu, thirdMenu]} />
    </section>
  )
}

export default Services
