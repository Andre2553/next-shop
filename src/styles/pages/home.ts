import { styled } from "..";

export const HomeContainer = styled('main', {
   display: 'flex',
   // gap: '3rem',
   maxWidth: 'calc(100vw - (100vw - 1600px)/2)',
   marginLeft: 'auto',
   minHeight: '80vh',
});
export const Products = styled('a', {
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   // padding: '0.25rem',
   cursor: 'pointer',
   position: 'relative',
   // minWidth: 540,

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover',
   },
   footer: {
      position: 'absolute',
      bottom: '0.25rem',
      left: '0.25rem',
      right: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 6,
      padding: '2rem',
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
      overflow: 'hidden',

      backgroundColor: 'rgba(0,0,0,0.6)',
      div: {
         display: 'grid',
         gap: '1rem',
         alignItems: 'stretch',
      },
      strong: {
         fontSize: '$lg',
         color: '$gray100',
      },
      span: {
         fontSize: '$xl',
         fontWeight: 'bold',
         color: '$green300'
      },
      button: {
         background: '$green500',
         border: 'none',
         color: '$white',
         padding: '1rem',
         borderRadius: 8,
         cursor: 'pointer',
      }
   },
   '&:hover': {
      footer: {
         transform: 'translateY(0)',
         opacity: 1,
      }
   }
});