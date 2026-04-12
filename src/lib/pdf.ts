export interface PdfField {
  label: string;
  value: string;
}

export async function generateAndDownloadPDF(
  title: string,
  fields: PdfField[],
  firstName: string,
  lastName: string
): Promise<string> {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF();

  const green = [22, 101, 52] as const;
  const white = [255, 255, 255] as const;
  const grey = [120, 120, 120] as const;
  const dark = [30, 30, 30] as const;

  // ── En-tête ──────────────────────────────────────────────
  doc.setFillColor(...green);
  doc.rect(0, 0, 210, 42, "F");

  doc.setTextColor(...white);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("HERO NATIONAL", 20, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ONG Guinée — Projet Won Fintin", 20, 30);
  doc.text(`Conakry, Quartier Kaloum — heronational224@gmail.com`, 20, 37);

  // ── Titre du formulaire ───────────────────────────────────
  doc.setTextColor(...green);
  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.text(title, 20, 56);

  doc.setTextColor(...grey);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const now = new Date();
  doc.text(
    `Date : ${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`,
    150,
    56
  );

  // ── Ligne de séparation ───────────────────────────────────
  doc.setDrawColor(...green);
  doc.setLineWidth(0.6);
  doc.line(20, 61, 190, 61);

  // ── Champs du formulaire ──────────────────────────────────
  let y = 73;

  fields.forEach((field) => {
    if (y > 272) {
      doc.addPage();
      y = 20;
    }

    // Fond alternant léger
    doc.setFillColor(248, 250, 248);
    doc.rect(18, y - 5, 174, 12, "F");

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...grey);
    doc.text(`${field.label}`, 22, y + 2);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...dark);
    const lines = doc.splitTextToSize(field.value || "—", 110);
    doc.text(lines, 80, y + 2);

    y += 8 * Math.max(lines.length, 1) + 4;
  });

  // ── Pied de page ─────────────────────────────────────────
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(...grey);
    doc.setFont("helvetica", "italic");
    doc.text(
      "Hero National ONG — heronational224@gmail.com — +224 622 30 99 09",
      20,
      288
    );
    doc.text(`Page ${i}/${pageCount}`, 185, 288, { align: "right" });
  }

  const filename = `${title.replace(/\s+/g, "-")}-${firstName}-${lastName}.pdf`;
  doc.save(filename);
  return filename;
}

export function openMailtoWithPdf(
  to: string,
  subject: string,
  firstName: string,
  lastName: string,
  pdfFilename: string
) {
  const body = encodeURIComponent(
    `Bonjour,\n\nVeuillez trouver ci-joint le formulaire "${subject}" rempli par ${firstName} ${lastName}.\n\n⚠️ N'oubliez pas d'attacher le fichier PDF téléchargé : ${pdfFilename}\n\nCordialement,\n${firstName} ${lastName}`
  );
  const encodedSubject = encodeURIComponent(`[Hero National] ${subject} — ${firstName} ${lastName}`);
  window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${body}`;
}
