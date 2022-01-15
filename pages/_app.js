import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import customeTheme from '../lib/theme';
import Navbar from '../Components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customeTheme}>
      <Navbar/>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp