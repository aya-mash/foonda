import html2pdf from "html2pdf.js";

export const createPdfFromHtml = async (filename, element) => {
  const opt = {
    margin: [15, 15],
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  await html2pdf().set(opt).from(element).save();
};
