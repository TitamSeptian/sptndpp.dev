"use client";
import { siteConfig } from "@/config/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "@/components/grid-item";

export default function Title({title} : {title:string}) {
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
    }, [scope]);


    return (
        <div
            ref={scope}
            className="grid w-full grid-cols-4 xl:gap-10 gap-6 px-4 md:px-12 xl:overflow-y-auto auto-rows-[76px]"
        >
            <GridItem size={"4x2"}>
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                </div>
            </GridItem>
        </div>

    )
}