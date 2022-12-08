import { styled } from "..";

export const SucessContainer = styled('main',{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0 auto',

   h1:{
      fontSize: '$2xl',
      color: '$gray100',
      margin: '2rem',
   },
   p:{
      fontSize: '$xl',
      color: '$gray300',
      maxWidth: 560,
      textAlign: 'center',
      lineHeight: 1.4,
   },

   a:{
      display: 'flex',
      marginTop: '5rem',
      fontSize: '$lg',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',

      '&:hover':{
         color: '$green300',
      },
   }
});

export const ImageContainer = styled('div',{
   width: '100%',
   height: 145,
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: '50%',
   padding: '0.4rem',

   marginLeft: '-3rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   zIndex: 1,
   img:{
      objectFit: 'cover',
   },

   boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.5)',

});
export const ImagesContainer = styled('div',{

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '0rem 3rem 0rem 3rem'
});
