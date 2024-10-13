import React from "react";

const sizingOptions = {
    paraText: "text-md sm:text-lg",
    paraWidth: "w-[95vw] md:w-[40vw]",
    headerWidth: "sm:max-w-[40%]",
    smallerWidth: "w-[60vw] md:w-[15vw]",
};

const MDXComponents: Record<string, React.ComponentType<any>> = {
    h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-2xl sm:text-3xl font-bold my-3 sm:my-4 text-yellow-400">
            {children}
        </h1>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
        <p className={`text-md sm:text-lg "w-[95vw] md:w-[40vw]"  my-2`}>
            {children}
        </p>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-xl sm:text-2xl font-semibold my-3 sm:my-5 text-sunsets-yellow">
            {children}
        </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-lg sm:text-xl font-semibold my-3 sm:my-5 text-sunsets-orange">
            {children}
        </h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
        <h4 className="text-base sm:text-lg font-semibold my-3 sm:my-5 text-white">
            {children}
        </h4>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
        <ul
            className={`${sizingOptions.paraText} ${sizingOptions.paraWidth} list-disc list-outside ms-3 my-2`}
        >
            {children}
        </ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
        <ol
            className={`${sizingOptions.paraText} ${sizingOptions.paraWidth} list-decimal list-outside ms-3 my-2`}
        >
            {children}
        </ol>
    ),
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base my-2 text-bright-800 hover:text-bright-500 cursor-pointer"
        >
            {children}
        </a>
    ),
    hr: () => (
        <hr
            className={`${sizingOptions["smallerWidth"]} my-12 border-1 border-blues-white`}
        />
    ),
    img: (props: any) => {
        const isVideo = props.src.endsWith(".mp4");

        if (isVideo) {
            return (
                <video
                    controls
                    className="my-3 sm:my-4 w-full h-auto"
                    src={props.src}
                />
            );
        }

        return (
            <img
                {...props}
                className="my-3 sm:my-4 max-w-full h-auto rounded-lg shadow-md"
                alt={props.alt || "Image"}
            />
        );
    },
    blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote
            className={`${sizingOptions.paraWidth} border-l-4 border-blues-white bg-blues-mid text-blues-white pl-2 pr-3 py-0 my-3 italic whitespace-pre-wrap`}
        >
            {children}
        </blockquote>
    ),
};

export default MDXComponents;
