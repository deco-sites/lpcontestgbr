import { AvailableIcons } from "site/components/ui/Icon.tsx";

interface ContactOption {
  /**
   * @format icon-select
   * @options deco-sites/lpcontestbr/loaders/availableIcons
   * */
  icon: AvailableIcons
  text: string
}

export interface Props {
  title: string
  subtitle?: string
  options?: ContactOption[]
}

function GetInTouch({ title, options, subtitle }: Props) {
  return <h1>GetInTouch</h1>
}

export default GetInTouch
