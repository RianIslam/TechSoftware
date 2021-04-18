import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SpliteCardForm from './SpliteCardForm';


const stripePromise = loadStripe('pk_test_51Ie4k9ArLxmjyrNDVhqtWyoHu4tLUN2CWRmM42PpuU8fYH9WgFNS5lBRzo64cQJ852qMv7ucCzxfhY0PpcqFs7Am00paaIa4Jf');

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      {/* <SpliteCardForm/> */}
      <SimpleCardForm/>
    </Elements>
  );
};

export default ProcessPayment;