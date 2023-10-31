"use client"
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "@/components/grid-item";
import {siteConfig} from "@/config/site-config";
import Social from "@/components/grid-items/social";
import Mentor from "@/components/grid-items/mentor";
import Project from "@/components/grid-items/project";

const Projects = () => {
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
            {siteConfig.projects.map((item, index) => {
                return (
                    <GridItem key={item.title + item.type + index} size={item.layout}>
                        {item.type === "project" ? (
                            <Project item={item} />
                        ) : (
                            <div>Need to create new component type.</div>
                        )}
                    </GridItem>
                );
            })}
        </div>
    )
};

export default Projects;
