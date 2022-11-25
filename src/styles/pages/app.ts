import { styled } from "..";

export const Container = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: "flex-start",
   justifyContent: "center",
   minWidth: '100vw',
})

export const HeaderStyle = styled('header', {
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
      position: 'relative',
   },
   a: {
      cursor: 'pointer',
   },

   img: {
      width: '100%',
   },
})

export const NumberSpan = styled('span', {

   position: 'absolute',
   color: '$gray100',
   fontSize: '$lg',
   fontWeight: 'bold',
   backgroundColor: '$green500',
   padding: '0.3rem 0.6rem',
   textAlign: 'center',
   borderRadius: 8,
   marginLeft: '3rem',
   marginTop: '-0.5rem',
   zIndex: 1,


})
export const CartButtonContainer = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   
});
