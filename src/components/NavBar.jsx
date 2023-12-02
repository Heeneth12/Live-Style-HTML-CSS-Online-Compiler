import React from "react";

function NavBar() {
  return (
    <>
      <nav className="bg-gray-800 py-1">
        <div className="mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center ml-5">
            <img
              src="https://p1.hiclipart.com/preview/724/587/750/browser-icon-code-icon-coding-icon-html-icon-programming-icon-web-icon-text-line-logo-sign-png-clipart.jpg"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
              }}
              alt="Logo"
            />
            <h1 className="font-mono text-lg font-bold text-white ml-2">
              Live Style
            </h1>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {/* GitHub SVG */}
            <a
              href="https://github.com/Heeneth12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white fill-current hover:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12a9.994 9.994 0 007.594 9.703c.555.102.759-.241.759-.536 0-.265-.01-.963-.015-1.888-3.088.672-3.74-1.5-3.74-1.5-.504-1.278-1.231-1.62-1.231-1.62-.997-.681.076-.666.076-.666 1.102.078 1.682 1.134 1.682 1.134.981 1.68 2.573 1.195 3.204.915.1-.706.383-1.195.696-1.469-2.44-.275-5.004-1.221-5.004-5.422 0-1.196.429-2.173 1.133-2.938-.114-.276-.492-1.394.108-2.903 0 0 .922-.295 3.02 1.123a10.59 10.59 0 012.704-.364c.916.005 1.841.124 2.704.364 2.095-1.418 3.016-1.123 3.016-1.123.603 1.509.225 2.627.111 2.903.706.765 1.132 1.742 1.132 2.938 0 4.211-2.567 5.143-5.017 5.41.394.339.748 1.007.748 2.033 0 1.469-.013 2.655-.013 3.019 0 .298.201.644.767.534A9.99 9.99 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram SVG */}
            <a
              href="https://instagram.com/rapid_code_?igshid=MmVlMjlkMTBhMg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
              >
                <path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>

            {/* Contact link */}
            <a
              href="https://www.linkedin.com/in/heeneth-sai-b78173216/"
              className="text-white hover:text-gray-300"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
