import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bottom-0 py-16 text-center">
      <a
        href="https://yehezgun.com"
        target="_blank"
        className="cursor-newtab font-semibold hover:underline"
        rel="noreferrer"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </a>
    </footer>
  );
};

export default FooterComponent;
