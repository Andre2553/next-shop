
import { styled } from "..";


export const Container = styled('div', {

   position: 'absolute',
   top: 0,
   right: 0,
   // padding: '2rem',
   bottom: 0,
   width: 0,
   transition: '0.5s',
   justifyContent: 'center',
   backgroundColor: '$gray800',
   zIndex: 999,
   // animation:`${scaleUp} 200ms`,
   

   h1: {
      padding: '2rem  0  0 2rem  ',
      fontSize: '$2xl',
   },
   variants: {
      isOpen: {
         'true': {

            width: '30vw',
            padding: '2rem',
            opacity: 1,
            '@sm': {
               width: '80vw',
            },
         },
         'false':{
            width: 0,
            opacity: 0,
         },
         'default': {
            
         }
      }
   },
});

export const CloseButton = styled('button', {
   display: 'flex',
   marginLeft: 'auto',
   marginRight: 0,
   background: 'content-box',
   position: 'relative',
   cursor: 'pointer',
   img: {
      objectFit: 'cover',
   },
});
export const ListOfProducts = styled('div', {
   padding: '2rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'center',

});
export const ImageContainer = styled('div', {

   minWidth: 100,
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   padding: '0.1rem',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   

   img: {
      objectFit: 'cover',
   },

});
export const Product = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   gap: '1.5rem',
   width: '100%',
   padding: '2rem  0  0 2rem  ',
   marginBottom: '1rem',
   borderRadius: 8,
   lineHeight: 2,
   h2:{
      fontSize: '$lg',
      fontWeight: 500,
      top:0,
      color: '$gray300',
   },
   p: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$gray100',

   }
});

export const QuantityButton = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   gap: '1.5rem',
   width: '100%',

   marginBottom: '1rem',
   borderRadius: 8,
   lineHeight: 2,
   p: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$gray100',

   },
   button:{
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
      color: '$gray100',
      fontSize: '$2xl',
      fontWeight: 'bold',
      '&:hover': {
         color: '$gray300',

      },
   }
});

export const Footer = styled('footer', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1.5rem',
   padding: '2rem  0  0 2rem  ',
   marginBottom: '1rem',
   borderRadius: 8,
   position: 'static',
   bottom: 0,
   h2:{
      fontSize: '$lg',
      fontWeight: 'bold',
      top:0,
      color: '$gray100',
   },
   p: {
      fontSize: '$lg',
      fontWeight: 500,
      color: '$gray300',

   },
   button:{
      marginTop: '2rem',
      width: '100%',

      background: '$green500',
      border: 'none',
      cursor: 'pointer',
      padding: '1.5rem',
      outline: 'none',
      color: '$gray100',
      fontSize: '$lg',
      fontWeight: 'bold',
      borderRadius: 8,
      '&:hover': {
         background: '$green300',
      }
   }
})