import { ImageWidget } from "apps/admin/widgets.ts";
import TabbedMenu from "site/islands/TabbedMenu.tsx";

export interface MenuProps {
  /**@description text displayed above the content */
  title: string
  /**@description text displayed on button */
  menuText: string
  /**
   * @format textarea
   * @description content textarea
   * */
  content: string
  image: {
    src: ImageWidget
    /**
     * @default Gabriel's art
     * @title
     * */
    alt: string
  }
}
export interface Props{
  id?: string
  firstMenu: MenuProps
  secondMenu: MenuProps
  thirdMenu: MenuProps
}

function Services({ firstMenu, secondMenu, thirdMenu, id="services" }: Props) {
  return (
    <section id={id} class="bg-theme-offwhite py-16 lg:py-32 px-2 flex flex-col gap-8 lg:gap-10 justify-center lg:items-center">
      <h2 class="text-center text-4xl lg:text-6xl font-serif text-theme-light-brown">
        Offered Creations
      </h2>

      <TabbedMenu menus={[firstMenu, secondMenu, thirdMenu]} />
    </section>
  )
}

export default Services
