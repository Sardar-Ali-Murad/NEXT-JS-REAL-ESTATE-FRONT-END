import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51L3igsAX34JgbNaA4c0rd2PAl8EayvBReK9w2M1yp3Ep8Mlz29MkPvMzHgVfS17dGsQ3nVQs9da8kwBtDxm8lx4S00VxEkycWL");
  }

  return stripePromise;
}

export default getStripe;