import { styled } from "..";

export const ProductContainer = styled('main', {
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   gap: '4rem',
   alignItems: 'stretch',

   maxWidth: 'calc(100vw - (100vw - 1180px)/2)',
   margin: '0 auto'

});

export const ImageContainer = styled('div', {
   width: '100%',
   minWidth: 576,
   height: 'calc(656px - 0.5rem)',
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   padding: '0.25rem',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover',
   },

});

export const ProductDetails = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   h1: {
      fontSize: '$2xl',
      color: '$gray300',
   
   },

   span:{
      marginTop: '1rem',
      display: 'block',
      fontSize: '$2xl',
      color: '$green300',
   },

   p:{
      marginTop: '2.5rem',
      fontSize: '$md',
      color: '$gray300',
      lineHeight: 1.6,
   },

   button:{
      marginTop: 'auto',
      background: '$green500',
      border: 'none',
      color: '$white',
      padding: '1.25rem',
      borderRadius: 8,
      fontSize: '$md',
      fontWeight: 'bold',
      cursor: 'pointer',

      '&:hover':{
         backgroundColor: '$green300',
      }
   }
});