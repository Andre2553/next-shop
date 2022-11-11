import { styled } from "..";

export const Container = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: "flex-start",
   justifyContent: "center",
   minWidth: '100vw',
})

export const Header = styled('header', {
   padding: '2rem 0',
   width: '100%',
   maxWidth: 'calc(100vw - (100vw - 1180px)/2)',
   margin: '0 auto',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   button: {
      background: '$gray800',
      border: 'none',
      color: '$white',
      padding: '1rem',
      borderRadius: 8,
      cursor: 'pointer',
   },
   a:{
      cursor: 'pointer',
   }
})