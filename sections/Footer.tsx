import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  id?: string
}

function Footer({ id="footer" }: Props) {
  return (
    <footer id={id} class="flex justify-center text-theme-light-brown items-center py-4 bg-theme-dark-brown">
      <p class="text-center text-[10px] font-light">
      Landing page contest promoted by <strong class="text-theme-deco-green">Deco</strong>. Designed and developed by Gabriel Antunes
      </p>
    </footer>
  );
}

export default Footer;
