import TestimonialCard, { TestimonialCardProps } from "site/components/TestimonialCard.tsx";

export interface Props {
    title: string
    subtitle?: string
    testimonialCards: TestimonialCardProps[]
}

function Testimonials({ title, subtitle, testimonialCards }: Props) {
    return (
        <section class="py-16 px-2 flex flex-col gap-8 bg-theme-gray">
            <div class="flex flex-col gap-4 text-center">
                <h2 class="text-theme-light-brown font-serif text-4xl">
                    {title}
                </h2>
                <p class="text-theme-light-brown text-lg font-light">
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
