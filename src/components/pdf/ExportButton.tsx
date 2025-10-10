"use client";

import { Button } from "@chakra-ui/react";
import { PiDownloadDuotone } from "react-icons/pi";

export function ExportButton() {
  const handleExport = async () => {
    const response = await fetch('/api/resume/pdf');

    if (!response.ok) {
      console.error('Failed to generate PDF');
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'anthony-cole-resume.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleExport} size="sm" variant="outline">
      <PiDownloadDuotone />
      Download PDF
    </Button>
  );
}
