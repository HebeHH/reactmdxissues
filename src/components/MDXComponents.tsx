import React from "react";

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
};

export default MDXComponents;
