function Hero() {
  return (
    <header class="bg-theme-green relative text-theme-gray pt-20 pb-9 pl-8 pr-4">
      <span class="absolute top-8 left-2 font-serif text-[0.5rem]">
        2024
      </span>

      <div class="relative mb-14">
        <h1 class="font-serif text-4xl">
          Gabriel Antunes
        </h1>
        <hr class="absolute -bottom-1 left-20 w-60" />
      </div>

      <div class="w-full flex flex-col justify-end items-end gap-6">
        <p class="font-light max-w-36 text-right">
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
