
import { keyframes } from "@stitches/react";
import { styled } from "..";
//absolute container on the right of the screen
const MoveLeft = keyframes({
   '0%': { transform: 'translate(100%, 0)' },
   '100%': { transform: 'translate(0, 0)' },
 });
 const MoveRight = keyframes({
   '0%': { transform: 'translate(0, 0)' },
   '100%': { transform: 'translate(100%, 0)' },
 });
export const Container = styled('div', {
   variants: {
      isOpen: {
         'true': {
            animation: `${MoveLeft} 0.3s ease-in-out`,
         },
         'false':{
            animation: `${MoveRight} 0.3s ease-in-out `,
            transform: 'translate(100%, 0)'
         
         },
         'default': {
            display: 'none',
         }
      }
   },
   position: 'absolute',
   top: 0,
   right: 0,
   padding: '2rem',
   bottom: 0,
   justifyContent: 'center',
   width: '30vw',
   minWidth: '300px',
   backgroundColor: '$gray800',
   zIndex: 999,
   // animation:`${scaleUp} 200ms`,
   opacity: 1,

   h1: {
      padding: '2rem  0  0 2rem  ',
      fontSize: '$2xl',
   }
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

   minWidth: 200,
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
   alignItems: 'center',
   gap: '1.5rem',
   width: '100%',
   padding: '2rem  0  0 2rem  ',
   marginBottom: '1rem',
   borderRadius: 8,
});