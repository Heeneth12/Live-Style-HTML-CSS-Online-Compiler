import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";

const CodeEditer = () => {
  const [htmlCode, setHtmlCode] = useState(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Live Style - Real-Time HTML & CSS Preview</title>
    <style>
        /* ... (Styles for the advertisement section) ... */
    </style>
</head>
    <body>
      <div class="advertisement">
        <h1>Experience Live Style</h1>
        <p>Live Style offers real-time HTML ,CSS & JavaScript code previewing, ensuring a fast and reliable coding experience. </p>
        <p>If you like Live Style, please give us a like and fork the project on <a href="https://github.com/Heeneth12" target="_blank">GitHub</a>.</p>
      </div>
    </body>
</html>
  `);
  const [cssCode, setCssCode] = useState(`
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
.advertisement {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    max-width: 600px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

.advertisement h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
    }

.advertisement p {
    font-size: 20px;
    color: #555;
    margin-bottom: 30px;
    }

.btn {
      display: inline-block;
      padding: 15px 30px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      transition: background-color 0.3s ease;
      font-size: 18px;
    }

.btn:hover {
    background-color: #0056b3;
    }
  `);

  useEffect(() => {
    const iframe =
      document.getElementById("previewFrame").contentWindow.document;
    iframe.open();
    iframe.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `);
    iframe.close();
  }, [htmlCode, cssCode]);

  return (
    <div className="flex h-screen">
      {/* Left Panel (Code Editors) */}
      <div
        className=" p-4"
        style={{
          width: "40%",
        }}
      >
        {/* HTML Code Editor */}
        <div
          className="flex"
          style={{
            width: "150px",
            borderRadius: "6px 6px 0 0",
            borderColor: "black",
            border: "2px solid black",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>

          <h1 className="font-mono ml-2">HTML</h1>
        </div>
        <AceEditor
          mode="html"
          theme="monokai"
          name="html_editor"
          fontSize={13}
          width="100%"
          height="50vh"
          value={htmlCode}
          onChange={setHtmlCode}
          highlightActiveLine={true}
          className="border-2 border-gray-800"
          setOptions={{
            enableSnippets: true,
          }}
        />

        {/* CSS Code Editor */}
        <div
          className="flex"
          style={{
            width: "150px",
            borderRadius: "6px 6px 0 0",
            borderColor: "black",
            border: "2px solid black",
            marginTop: "12px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <h1 className="font-mono ml-2 ">CSS</h1>
        </div>
        <AceEditor
          mode="css"
          theme="monokai"
          name="css_editor"
          width="100%"
          height="42vh"
          fontSize={13}
          value={cssCode}
          onChange={setCssCode}
          highlightActiveLine={true}
          className="border-2 border-gray-800 "
          setOptions={{
            enableSnippets: true,
          }}
        />
      </div>

      {/* Right Panel (Live Preview) */}
      <div
        className=" p-4"
        style={{
          width: "100%",
          height: "90vh",
        }}
      >
        <div
          className="flex"
          style={{
            width: "150px",
            borderRadius: "6px 6px 0 0",
            borderColor: "black",
            border: "2px solid black",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 red white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <h1 className="font-mono ml-2 ">live preview</h1>
        </div>

        <iframe
          id="previewFrame"
          title="Live Preview"
          style={{
            height: "90vh",
            borderColor: "black",
          }}
          className="w-full  border-2 border-gray-500"
        ></iframe>
      </div>
    </div>
  );
};

export default CodeEditer;
