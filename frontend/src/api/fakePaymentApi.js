// Fake payment gateway (no real money, no real server).
// Every function returns a Promise and waits a little, like a real network call.
// Later you can replace the body of these functions with fetch()/axios calls
// to your real backend / Razorpay / Stripe and the UI code will not change.

// 0 = payments never fail, 0.1 = 10% payments fail (to test the error UI)
const FAIL_RATE = 0.1

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Step 1: create an order on the "server"
export const createOrder = async ({ items, amount, address }) => {
  await wait(800)
  return {
    orderId: 'ORD' + Date.now(),
    items,
    amount,
    address,
    status: 'CREATED',
  }
}

// Step 2: take the payment for that order
// method = 'UPI' | 'Card' | 'COD'
export const processPayment = async ({ orderId, amount, method }) => {
  await wait(1500)

  // Cash on delivery needs no online payment
  if (method === 'COD') {
    return { paymentId: 'COD' + Date.now(), orderId, amount, method, status: 'PENDING_COD' }
  }

  if (Math.random() < FAIL_RATE) {
    throw new Error('Payment declined by the bank (fake). Please try again.')
  }

  return { paymentId: 'PAY' + Date.now(), orderId, amount, method, status: 'SUCCESS' }
}
