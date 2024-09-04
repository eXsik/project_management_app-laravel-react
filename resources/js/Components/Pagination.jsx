import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center my-4">
            {links.map((link, index) => (
                <Link
                    preserveScroll
                    key={index}
                    href={link.url}
                    className={
                        "inline-block py-2 px-3 text-gray-200 text-xs " +
                        (link.active ? "bg-gray-900 " : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed"
                            : " hover:bg-gray-900")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
};

export default Pagination;
