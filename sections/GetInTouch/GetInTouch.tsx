import { AvailableIcons } from "site/components/ui/Icon.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface ContactOption {
  /**
   * @format icon-select
   * @options deco-sites/lpcontestbr/loaders/availableIcons
   * */
  icon: AvailableIcons
  text: string
}

export interface Props {
  id?: string
  title: string
  subtitle?: string
  options?: ContactOption[]
}

function GetInTouch({ id="getInTouch", title, subtitle, options }: Props) {
  return (
    <section id={id} class="flex flex-col justify-center items-center px-2 py-16 rounded-b-3xl bg-theme-offwhite">
      <div class="flex flex-col gap-6 border border-theme-gray rounded-sm px-2 py-9">

        <h2 class="font-serif text-4xl text-theme-dark-brown text-center">
          {title}
        </h2>

        <p class="text-2xl text-theme-light-brown font-light text-center">
          {subtitle}
        </p>

        <ul class="flex flex-col gap-4 pl-5">
          {options && options.map(option => (
            <li class="flex gap-3 text-theme-dark-brown font-light">
              <Icon id={option.icon} size={28} />
              <span>{option.text}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default GetInTouch
