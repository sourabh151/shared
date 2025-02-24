import tour1 from "../images/tour-1.jpeg"
import tour2 from "../images/tour-2.jpeg"
import tour3 from "../images/tour-3.jpeg"
import tour4 from "../images/tour-4.jpeg"

export const navLinks = [
    "home", "about", "services", "tours"
]
export const navIcons = [
    { href: "https://www.facebook.com", icon: "fab fa-facebook" },
    { href: "https://www.twitter.com", icon: "fab fa-twitter" },
    { href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
]
export const services = [
    { icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { icon: "fas fa-tree fa-fw", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { icon: "fas fa-socks fa-fw", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." }
]
export const tours = [
    {
        id: 1,
        img: tour1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "china",
        duration: "6 Days",
        cost: "From $2100"
    },
    {
        id: 2,
        img: tour2,
        date: "october 1th, 2020",
        title: "best of java",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Indonesia",
        duration: "11 Days",
        cost: "From $1400"
    },
    {
        id: 3,
        img: tour3,
        date: "september 15th, 2020",
        title: "Explore Hong Kong",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Hong Kong",
        duration: "8 Days",
        cost: "From $5000"
    },
    {
        id: 4,
        img: tour4,
        date: "december 5th, 2019",
        title: "kenya highlights",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Kenya",
        duration: "20 Days",
        cost: "From $3300"
    },
]