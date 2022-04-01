import tw from 'tailwind-styled-components';


export const BaseButton = tw.button`
    bg-purple h-10 px-6 text-white font-bold hover:midnight disabled:cursor-not-allowed disabled:bg-blue-100
`

export const MainButton = tw(BaseButton)`
bg-purple hover:midnight disabled:cursor-not-allowed disabled:bg-midnight
`

export const SecondaryButton = tw(BaseButton)`
    bg-metal hover:bg-purple text-white
`