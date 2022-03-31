import tw from 'tailwind-styled-components';


export const BaseButton = tw.button`
    bg-blue-500 h-10 px-6 text-white font-bold hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-100
`

export const MainButton = tw(BaseButton)`
bg-blue-500 hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-100
`

export const SecondaryButton = tw(BaseButton)`
    bg-blue-300 hover:bg-blue-500 text-white
`