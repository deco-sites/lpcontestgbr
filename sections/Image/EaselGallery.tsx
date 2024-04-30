function EaselGallery() {
    return (
        <section class="bg-theme-gray py-16 px-4 flex flex-col gap-16 items-center">
            <h2 class="w-full text-right text-5xl text-theme-light-brown font-serif">
                Explore diverse images and delve into the <strong class="text-theme-dark-brown font-normal">captivating</strong> details of each selected artwork
            </h2>

            <div class="border border-red-500 w-72 h-96 flex flex-col gap-6">
                {/* hastes traseiras */}
                <div class="border border-blue-500 flex-1 relative">
                    <div class="rounded-sm bg-theme-light-brown w-6 h-3 absolute top-0 left-1/2 -translate-x-1/2  z-10" />
                    <div class="rounded-sm bg-theme-dark-brown w-3 h-full absolute left-1/2 -top-6 -translate-x-1/2 z-0" />
                    <div class="rounded-sm bg-theme-light-brown w-4 h-full -bottom-2 absolute left-24 rotate-6 z-10" />
                    <div class="rounded-sm bg-theme-light-brown w-4 h-full -bottom-2 absolute right-24 -rotate-6 z-10" />

                    <div class="rounded-sm bg-white w-40 h-48 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 shadow-md">
                        Image
                    </div>

                    <div class="rounded-sm bg-theme-light-brown w-36 h-3 bottom-10 absolute right-1/2 translate-x-1/2 z-10 shadow-md" />

                </div>

                <div class="border border-green-500">
                    Slider
                </div>
            </div>

        </section>
    )
}

export default EaselGallery
