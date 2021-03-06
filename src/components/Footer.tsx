import { h } from "preact";
import type { FunctionComponent } from "preact";

const Footer: FunctionComponent = ({ children }) => {
  return (
    <footer class="w-full p-4 flex justify-center border-t-2 text-text">
      {children}
    </footer>
  );
};

export default Footer;
