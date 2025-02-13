function openPDF(language) {
    const pdfLinks = {
        en: "https://drive.google.com/file/d/1pDdXWaE0kARqrRWejz6Mt9-Cw6CKm6D2/view", // Replace with your actual link
        es: "https://drive.google.com/file/d/10ETIDWi3RwYVWKjXzBAuv8shUZoZVax8/view", // Replace with your actual link
        de: "https://drive.google.com/file/d/1JDaM4jFjzL-hEmVFaCLFOzRmanqhyczt/view"  // Replace with your actual link
    };
    
    const pdfUrl = pdfLinks[language];

    if (pdfUrl) {
        window.open(pdfUrl, "_blank");
    } else {
        alert("Sorry, this menu is not available.");
    }
}
