import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rohit Sharma",
    feedback:
      "PulseFit changed my life! Trainers are amazing and the environment is super motivating.",
  },
  {
    name: "Priya Verma",
    feedback:
      "Clean space, great machines, and very supportive staff. Love the group classes!",
  },
  {
    name: "Aman Gupta",
    feedback:
      "The personal trainers here are really focused. My transformation has been unbelievable!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        What Our <span className="text-yellow-400">Members Say</span>
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map(({ name, feedback }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-700/60 backdrop-blur-lg p-8 rounded-3xl text-left shadow-2xl border border-gray-600 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center text-lg">
                  {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
              </div>
              <p className="text-yellow-100 leading-relaxed text-base italic">
                “{feedback}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
