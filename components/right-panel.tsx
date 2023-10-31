"use client";
import { siteConfig } from "@/config/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "./grid-item";
import Mentor from "./grid-items/mentor";
import Project from "./grid-items/project";
import Social from "./grid-items/social";

const RightPanel = () => {
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
            className="grid w-full grid-cols-4 xl:gap-10 gap-6 p-4 md:p-12 xl:overflow-y-auto auto-rows-[76px]"
        >
            {siteConfig.socials.map((item, index) => {
                return (
                    <GridItem key={item.title + item.type + index} size={item.layout}>
                        <Social item={item} />
                    </GridItem>
                );
            })}
        </div>
    );
};

export default RightPanel;
