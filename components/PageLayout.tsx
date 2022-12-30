import React from "react";

interface Props {
  children: React.ReactNode;
}
function PageLayout({ children }: Props) {
  return <>{children}</>;
}

export default PageLayout;
