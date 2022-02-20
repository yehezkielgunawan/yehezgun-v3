import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bottom-0 pt-16 pb-32 text-center md:pb-12">
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
