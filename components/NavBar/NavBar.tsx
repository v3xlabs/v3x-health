import { FC } from 'react';

export const NavBar: FC = () => {
    return (
        <head className="w-full p-8 pb-4 pt-6 md:pt-6 md:pb-4 md:px-8 flex justify-between">
            <div className="flex flex-col justify-center">
                <div className="bg-notblack w-fit font-bold">
                    <span className="text-white -1 mx-3">v3xlabs</span>
                </div>
                <div>Empowering open-source</div>
            </div>
            <nav className="flex">
                <ul className="grid grid-rows-3 grid-flow-col gap-x-4">
                    {[
                        ['.company', 'https://v3x.company'],
                        ['.wiki', 'https://v3x.wiki'],
                        ['.health', 'https://v3x.health'],
                        ['.contact', 'https://v3x.contact'],
                        ['.domains', 'https://v3x.domains'],
                        ['.chat', 'https://v3x.chat'],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="hover:text-blue-500 hover:underline text-notblack"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </head>
    );
};
