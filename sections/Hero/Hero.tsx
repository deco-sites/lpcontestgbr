interface Props {
  id?: string
}

function Hero({ id="hero" }: Props) {
  return (
    <header id={id} class="bg-theme-green relative text-theme-gray pt-20 lg:pt-32 pb-9 pl-8 pr-4">
      <span class="absolute top-8 left-2 font-serif text-[0.5rem]">
        2024
      </span>

      <div class="relative mb-14">
        <h1 class="font-serif text-3xl lg:text-9xl lg:mb-9">
          Gabriel Antunes
        </h1>
        <hr class="absolute -bottom-1 left-20 lg:left-60 w-60 lg:w-1/2"/>
      </div>

      <div class="w-full flex flex-col justify-end items-end lg:items-start gap-6 lg:pl-40 lg:mb-12">
        <p class="font-light max-w-36 text-right lg:text-left">
          Traditional <strong class="font-normal">artist</strong>, based in São Paulo, Brazil
        </p>
        <p><strong class="font-normal">
          Let's create art
        </strong></p>
      </div>

      <span class="absolute bottom-8 left-2 font-serif text-[0.5rem]">
        Landing page, service
      </span>
    </header>
  )
}

export default Hero
