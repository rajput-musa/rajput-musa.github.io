// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import huaweiMainImg from "/assets/About/huawei-ai-main.jpg";
import huaweiAI1Img from "/assets/About/huawei-ai1.jpg";
import hackxilaImg from "/assets/About/hackxila.jpg";
import fypImg from "/assets/About/fyp.jpg";

const images = [
  { 
    src: huaweiMainImg, 
    alt: "Moosa Qaisar at Huawei AI Application Contest - 3rd Place Winner",
    captions: [
      { text: "Award Winner.", color: "text-orange-400" },
      { text: "AI Engineer.", color: "text-blue-400" }
    ]
  },
  { 
    src: huaweiAI1Img, 
    alt: "Moosa Qaisar at Huawei Innovation Center",
    captions: [
      { text: "Builder.", color: "text-green-400" },
      { text: "Innovator.", color: "text-purple-400" }
    ]
  },
  { 
    src: hackxilaImg, 
    alt: "Moosa Qaisar at HackXila competition",
    captions: [
      { text: "Competitor.", color: "text-cyan-400" },
      { text: "Problem Solver.", color: "text-yellow-400" }
    ]
  },
  { 
    src: fypImg, 
    alt: "Moosa Qaisar with FYP team",
    captions: [
      { text: "Researcher.", color: "text-pink-400" },
      { text: "Team Player.", color: "text-indigo-400" }
    ]
  }
];

export default function AboutSection() {
  return (
    <section className="relative">
      <div className="relative mb-12">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full rounded-2xl overflow-hidden"
          style={{ maxHeight: '600px' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-start items-start py-3 px-4 sm:py-4 sm:px-6 md:py-6 md:px-12 bg-gradient-to-r from-[color-mix(in_oklch,black_35%,transparent)] to-transparent">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-white custom-outline">
                    Moosa Qaisar
                  </h1>
                  <div className="flex flex-row flex-wrap gap-1 sm:gap-2">
                    {image.captions.map((caption, idx) => (
                      <p key={idx} className={`text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 font-light ${caption.color} custom-outline`}>
                        {caption.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="space-y-6">
        <div className="prose prose-adaptive prose-lg max-w-none">
          <p className="text-xl leading-relaxed">
            As a Computer Engineering student with a strong passion for
            Artificial Intelligence and Machine Learning, I am dedicated to
            building smart, end-to-end solutions. I have hands-on experience
            in developing and implementing machine learning models, with a focus
            on computer vision and Natural Language Processing.
          </p>
        </div>
      </div>
    </section>
  );
}
