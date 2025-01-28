"use client";
import styles from "@/styles/testimonial.module.css";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import firstPerson from "@/assets/Ellipse 10.png";
import secondPerson from "@/assets/Ellipse 11.png";
import SectionHeading from "../UI/SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  message: string;
  image: StaticImageData;
}

export default function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: firstPerson,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: secondPerson,
    },
    {
      id: 3,
      name: "Mark Wilson",
      title: "Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: firstPerson,
    },
    {
      id: 4,
      name: "Mark Wilson",
      title: "Manager",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: secondPerson,
    },
  ];

  const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section style={{ marginTop: "139px" }}>
      <SectionHeading
        title="Testimonials"
        subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className={styles.carousel}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                className={`${styles.emblaSlide} ${
                  index !== selectedIndex ? styles.inactive : ""
                }`}
                key={testimonial.id}
              >
                <div className={styles.testimonialCard}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />
                  <div className={styles.testimonialContent}>
                    <p className={styles.message}>
                      <span className={styles.quote}>&quot;</span>
                      {testimonial.message}
                      <span className={styles.quote}>&quot;</span>
                    </p>
                    <p className={styles.name}>{testimonial.name}</p>
                    <p className={styles.title}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.active : ""
              }`}
              onClick={() => embla?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
