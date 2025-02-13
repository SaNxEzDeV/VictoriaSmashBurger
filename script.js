function openPDF(language) {
    const pdfLinks = {
        en: "https://example.com/english-menu.pdf", // Replace with your actual link
        es: "https://example.com/spanish-menu.pdf", // Replace with your actual link
        de: "https://example.com/german-menu.pdf"  // Replace with your actual link
    };
    
    const pdfUrl = pdfLinks[language];

    if (pdfUrl) {
        window.open(pdfUrl, "_blank");
    } else {
        alert("Sorry, this menu is not available.");
    }
}
