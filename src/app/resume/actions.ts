'use server';

import { getResumeData } from '@/lib/resume-parser';
import { renderToBuffer } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/pdf/ResumePDF/ResumePDF';

export async function getResumeDataAction() {
  return await getResumeData();
}

export async function generateResumePDF() {
  const resumeData = await getResumeData();

  const buffer = await renderToBuffer(
    ResumePDF({
      ...resumeData
    })
  );

  return buffer;
}
