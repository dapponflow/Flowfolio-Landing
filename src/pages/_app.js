import Footer from "@/components/footer";
import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (

    <div className="min-h-[100vh]">
      <div className="px-2 sm:px-4 pt-[70px]">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
      <Footer />
    </div>

  );
}
