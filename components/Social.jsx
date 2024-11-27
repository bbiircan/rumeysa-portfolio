import Link from "next/link";

import {
    FaGithub, FaEnvelope,
    FaLinkedinIn, FaMedium
} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/bbiircan" },
    { icon: <FaEnvelope />, path: "mailto:dev.rumeysabircan@gmail.com" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/rümeysabircan" },
    { icon: <FaMedium />, path: "https://medium.com/@rumeysabircan" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social
