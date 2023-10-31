"use client";
import { siteConfig } from "@/config/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "@/components/grid-item";
import Image from "next/image";

const About = () => {
    const [scope, animate] = useAnimate();
    const staggerGridItems = stagger(0.02, {
        startDelay: 0.5,
    });

    // ANIMATION
    useEffect(() => {
        if (scope.current) {
            animate(
                "div",
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
                {
                    type: "spring",
                    stiffness: 330,
                    damping: 35,
                    delay: staggerGridItems,
                }
            );
        }
    }, [scope])


    return (
        <div
            ref={scope}
            className="grid w-full grid-cols-4 xl:gap-10 gap-6 p-4 md:p-12 xl:overflow-y-auto auto-rows-[76px]"
        >
            <GridItem size={"2x6"}>
                <div>
                    <Image
                        priority
                        loading="eager"
                        alt="avatar"
                        placeholder="blur"
                        src="/pp2020.png"
                        width={0}
                        height={0}
                        sizes="100vh"
                        style={{ width: '100%', height: '100vh', objectFit: 'cover', overflow: 'hidden' }}
                        blurDataURL="/pp2020.png"
                    />
                </div>
            </GridItem>
            <GridItem size={"2x6"}>
                <div className="flex justify-center items-center">
                    <h1 className="text-md font-normal px-4 leading-loose overflow-scroll">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem illum, iusto? Ab aliquid aperiam atque commodi deleniti dicta, dolore ea eligendi explicabo impedit magnam maiores natus nemo ratione, sed voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem illum, iusto? Ab aliquid aperiam atque commodi deleniti dicta, dolore ea eligendi explicabo impedit magnam maiores natus nemo ratione, sed voluptatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem illum, iusto? Ab aliquid aperiam atque commodi deleniti dicta, dolore ea eligendi explicabo impedit magnam maiores natus nemo ratione, sed voluptatibus!
                    </h1>
                </div>
            </GridItem>

        </div>
    )
}

export default About;