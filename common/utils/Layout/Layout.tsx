import { LayoutProps } from "@/types/components/utils/Layout";

import Header from "@/components/header/Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Layout;
