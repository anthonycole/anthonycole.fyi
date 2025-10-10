"use client";

import { Button } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

export function ExportButton() {
  const handleExport = async () => {
    // Fetch PDF from API route
    const response = await fetch('/api/resume/pdf');

    if (!response.ok) {
      console.error('Failed to generate PDF');
      return;
    }

    // Create blob from response and download
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
      <LuDownload />
      Download PDF
    </Button>
  );
}
