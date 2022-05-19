import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container
        position="relative"
        maxW="container.100"
        p={0}
        overflow="clip"
        maxWidth="100vw"
      >
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
