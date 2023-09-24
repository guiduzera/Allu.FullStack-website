import Cart from "@/components/Cart";
import Header from "@/components/Header";
import CheckoutComponent from "@/components/checkoutComponent";
import { CheckutContainer } from "@/styles/checkoutStyles";
import Head from "next/head";

export default function Checkout() {
  return (
    <CheckutContainer>
      <Head>
        <title>Allu | checkout</title>
        <meta name="description" content="loja compleata de produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Cart />
      <Header />
      <CheckoutComponent />
    </CheckutContainer>
  );
}
