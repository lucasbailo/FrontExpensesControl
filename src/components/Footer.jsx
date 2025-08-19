import React from "react";

function Footer() {
    return (
        <footer className="flex justify-between items-center py-4 px-8 bg-purple-800">
            <div className="text-base">
                <p>Copyright 2025 - IntegraMente. Todos os direitos reservados.</p>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="text-white"
                    >
                        <path d="M5.5 9.5l7-7 7 7" />
                        <path d="M12 14.5v-11" />
                    </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                        fill="none"
                    >
                        <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
