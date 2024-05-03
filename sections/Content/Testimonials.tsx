import TestimonialCard, { TestimonialCardProps } from "site/components/TestimonialCard.tsx";

export interface Props {
    id?: string
    title: string
    subtitle?: string
    testimonialCards: TestimonialCardProps[]
}

function Testimonials({ id="testimonials", title, subtitle, testimonialCards }: Props) {
    return (
        <section id={id} class="py-16 px-2 flex flex-col lg:flex-row lg:justify-center gap-8 bg-theme-gray">
            <div class="flex flex-col gap-4 text-center lg:max-w-md lg:text-left">
                <h2 class="text-theme-light-brown font-serif text-4xl lg:text-6xl">
                    {title}
                </h2>
                <p class="text-theme-light-brown text-lg lg:text-2xl font-light">
                    {subtitle}
                </p>
            </div>

            <div class="flex gap-6 overflow-x-scroll">
                {testimonialCards && testimonialCards.map(card => (
                    <TestimonialCard autor={card.autor} content={card.content} image={card.image} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials
