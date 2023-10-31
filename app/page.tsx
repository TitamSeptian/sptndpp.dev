import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
// import RightPanel from "@/components/right-panel";
import Image from "next/image";
import {siteConfig} from "@/config/site-config";
import gridItem from "@/components/grid-item";
import GridTitle from "@/components/grid-items/title";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="relative flex flex-col items-center flex-1 w-full h-full">
            {/* Pattern */}
            <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall"/>
            {/* Overlay */}
            <div
                className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950"/>
            {/*full view port*/}
            {/*grid 2 cols with full height*/}
            <div className="relative z-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="grid grid-cols-1 place-items-center p-4 md:p-12">
                        <div className="rounded-3xl z-20 overflow-hidden">
                            <Image src={'/pp2.jpg'} alt={siteConfig.creator}
                                   priority
                                   placeholder="blur"
                                   width={0}
                                   height={0}
                                   sizes="100vh"
                                   style={{width: '100vw', height: '87vh', objectFit: 'cover', overflow: 'hidden'}}
                                   blurDataURL={'/pp2.jpg'}
                                   loading="eager"/>
                        </div>
                    </div>

                    <div className="relative z-20 grid grid-cols-1 md:grid-cols-1 content-center">
                        <div className="flex flex-col justify-between h-screen items-start p-4 md:p-12">
                            <div>{siteConfig.alias}</div>
                            <div className='space-y-2'>
                                <h1 className='text-4xl md:text-8xl font-bold'>{siteConfig.firstLastName}a</h1>
                                <h5 className="text-md">{siteConfig.title}</h5>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <GridTitle title={"About Me"}/>
                <About/>
                <GridTitle title={"Projects"}/>
                <Projects/>
                <GridTitle title={"Socials"}/>
                <RightPanel/>
            </div>

            <div className="flex pb-6">
                <Footer/>
            </div>
        </main>
    );
}
