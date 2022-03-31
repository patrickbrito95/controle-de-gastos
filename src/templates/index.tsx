import tw from "tailwind-styled-components";

export const Container = tw.div`
    w-screen h-screen bg-gray-50 flex flex-col items-center
`;

export const Content = tw.div`
w-full h-full max-w-screen-lg grid grid-cols-2
`;

export const Aside = tw.aside`
    flex
`;

export const Main = tw.main`
    flex flex-col justify-center items-center gap-4
`;

export const H1 = tw.h1`
    font-bold text-2xl
`;

export const Form = tw.form`
flex flex-col w-full gap-2 max-w-xs
`;
