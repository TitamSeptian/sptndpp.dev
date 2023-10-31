export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "mentor" | "project";
export type EqiupmentItem = {
    title: string;
    link: string;
};

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    /* Mentor */
    promotion?: string;
    price?: string;
    oldPrice?: string;
    /* Project */
    stars?: number;
    /* Equipments */
    equipments?: EqiupmentItem[];
    image?: string;
}

const GridItems: GridItemInterface[] = [
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@TitamSeptian",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/TitamSeptian",
        color: "#070707",
    },
    {
        layout: "2x1",
        type: "project",
        title: "Build It",
        icon: "website",
        color: "#070707",
        buttonLink: "https://build-it.vercel.app/",
    },
];
const projects: GridItemInterface[] = [
    {
        layout: "2x1",
        type: "project",
        title: "Build It",
        icon: "website",
        color: "#070707",
        buttonLink: "https://build-it.vercel.app/",
    },
    {
        layout: "2x1",
        type: "project",
        title: "Build It",
        icon: "website",
        color: "#070707",
        buttonLink: "https://build-it.vercel.app/",
    },
];

const socials: GridItemInterface[] = [
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@TitamSeptian",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/TitamSeptian",
        color: "#070707",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@TitamSeptian",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/TitamSeptian",
        color: "#070707",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@TitamSeptian",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/TitamSeptian",
        color: "#070707",
    },{
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@TitamSeptian",
        buttonTitle: "Follow",
        buttonLink: "https://github.com/TitamSeptian",
        color: "#070707",
    },

];

export const siteConfig = {
    creator: "Septian Dwi Putra Pradipta",
    firstLastName: "Septian Pradipta",
    alias: "TitamSeptian",
    title: "Full Stack Developer",
    bio: "I'm a full-stack developer",
    location: "Bandung, Indonesia",
    locationLink: "",
    email: "dwiputra4456@protonmail.com",
    items: GridItems,
    projects: projects,
    socials: socials,
} as const;
