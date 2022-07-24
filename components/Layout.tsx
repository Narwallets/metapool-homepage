import Script from "next/script";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Script
        id="google-tag-mananger-1"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-330HH1R960`}
      />
      <Script id="google-tag-mananger-2" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-330HH1R960');
        `}
      </Script>
      <Header />
      <Container
        position="relative"
        maxW="container.100"
        p={0}
        overflow="clip"
        maxWidth="100vw"
        bgColor="#F8FAFC"
      >
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
