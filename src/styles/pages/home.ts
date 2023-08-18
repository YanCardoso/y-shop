import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
  width: '100%',
})

export const Product = styled('a', {
  display: 'flex',

  padding: '0.25rem',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },

  overflow: 'hidden',

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '2rem',

    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(120%)',
    transition: 'all 0.5s ease-in-out',
    opacity: 0,

    background: 'rgba(0, 0, 0, 0.6)',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
