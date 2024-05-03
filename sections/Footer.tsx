export interface Props {
  /**@description element id */
    id?: string
}

function Footer({ id="footer" }: Props) {
  return (
    <footer id={id} class="flex justify-center text-theme-light-brown items-center py-4 lg:py-8 bg-theme-dark-brown">
      <p class="text-center text-[10px] lg:text-sm font-light">
      Landing page contest promoted by <strong class="text-theme-deco-green">Deco</strong>. Designed and developed by Gabriel Antunes
      </p>
    </footer>
  );
}

export default Footer;
