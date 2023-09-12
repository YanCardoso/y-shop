import Stripe from 'stripe'

export const stripe = new Stripe(process.env.PRIVATE_STRIPE_KEY!, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Y Shop',
  },
})
