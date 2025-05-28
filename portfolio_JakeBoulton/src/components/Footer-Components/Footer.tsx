import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full text-center py-4 border-t mt-auto text-sm text-gray-500">
             © {new Date().getFullYear()} Jake Boulton. All rights reserved.
        </footer>
    )
}

export default Footer;