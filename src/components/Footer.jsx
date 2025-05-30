import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-marquee">
        राम नाम की लूट है, लूट सके तो लूट।
        अंत काल पछताएगा, जब प्राण जाएँगे छूट॥
      </div>

      <div className="footer-container">
        <p>© {new Date().getFullYear()} गुरुदेव — सभी अधिकार सुरक्षित 🙏</p>
      </div>
    </footer>
  );
}
