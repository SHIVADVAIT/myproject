import React from "react";
import "./Books.css";

const books = [
  {
    title: "हनुमान बाहुक",
    description: "यह पुस्तक तुलसीदास द्वारा रचित एक भक्तिमय स्तोत्र है जो भगवान हनुमान को समर्पित है।",
    pdfLink: "/pdfs/hanuman_bahuk.pdf"
  },
  {
    title: "साधना सिद्धि",
    description: "यह एक आध्यात्मिक मार्गदर्शिका है जो ध्यान और आत्म-साक्षात्कार पर केंद्रित है।",
    pdfLink: "/pdfs/sadhna_siddhi.pdf"
  },
  {
    title: "सीता अनुप्रास",
    description: "यह पुस्तक देवी सीता के जीवन और गुणों पर आधारित महाकाव्य कथा है।",
    pdfLink: "/pdfs/sita.pdf"
  }
];

export default function Books() {
  return (
    <div className="books-container">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-description">{book.description}</p>
          <a
            href={book.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            PDF डाउनलोड करें
          </a>
        </div>
      ))}
    </div>
  );
}
