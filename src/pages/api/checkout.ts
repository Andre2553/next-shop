// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { line_items } = req.body;
  console.log(line_items);
  if(req.method !== 'POST'){
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
  if(!line_items){
    return res.status(400).json({error: 'Price ID is required'})
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${process.env.NEXT_URL}/`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: success_url,
    cancel_url: cancel_url,
    line_items: line_items,

  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
