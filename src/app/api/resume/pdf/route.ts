import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/pdf/ResumePDF/ResumePDF';
import { getResumeData } from '@/lib/resume-parser';

export async function GET() {
  try {
    const resumeData = await getResumeData();

    const buffer = await renderToBuffer(
      ResumePDF({
        summary: resumeData.summary,
        recentJobs: resumeData.recentJobs,
        pastJobs: resumeData.pastJobs,
        skills: resumeData.skills,
        accreditation: resumeData.accreditation,
      })
    );

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="anthony-cole-resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
