import fs from 'fs';
import path from 'path';

export interface JobData {
  title: string;
  company: string;
  dates: string;
  type?: string;
  responsibilities: string[];
  techStack?: string[];
  achievements?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface Accreditation {
  title: string;
  institution: string;
  year?: string;
  time?: string;
}

// Parse MDX file content to extract job data
function parseJobsFromMDX(content: string): JobData[] {
  const jobs: JobData[] = [];

  // Match all <Job ... /> components
  const jobMatches = content.matchAll(/<Job\s+([\s\S]*?)\/>/g);

  for (const match of jobMatches) {
    const propsText = match[1];

    const job: JobData = {
      title: extractProp(propsText, 'title'),
      company: extractProp(propsText, 'company'),
      dates: extractProp(propsText, 'dates'),
      type: extractProp(propsText, 'type'),
      responsibilities: extractArrayProp(propsText, 'responsibilities') || [],
      techStack: extractArrayProp(propsText, 'techStack'),
      achievements: extractArrayProp(propsText, 'achievements'),
    };

    jobs.push(job);
  }

  return jobs;
}

function extractProp(text: string, propName: string): string {
  const regex = new RegExp(`${propName}=["']([^"']+)["']`);
  const match = text.match(regex);
  return match ? match[1] : '';
}

function extractArrayProp(text: string, propName: string): string[] | undefined {
  const regex = new RegExp(`${propName}=\\{\\[([^\\]]+)\\]\\}`);
  const match = text.match(regex);

  if (!match) return undefined;

  // Extract strings from array
  const arrayContent = match[1];
  const items = arrayContent.match(/"([^"]+)"/g);

  if (!items) return undefined;

  return items.map(item => item.replace(/"/g, ''));
}

function extractSummary(content: string): string[] {
  // Remove import statements and component tags
  let cleanContent = content.replace(/import\s+.*?from\s+.*?\n/g, '');
  cleanContent = cleanContent.replace(/<[^>]*>/g, '');
  cleanContent = cleanContent.replace(/export\s+.*?\n/g, '');
  
  // Clean up extra whitespace and normalize line breaks
  cleanContent = cleanContent.replace(/\n{3,}/g, '\n\n');
  cleanContent = cleanContent.trim();
  
  // Split by double newlines to get paragraphs
  const paragraphs = cleanContent
    .split(/\n\s*\n/)
    .map(p => p.replace(/\n/g, ' ').trim()) // Join lines within paragraphs
    .filter(p => p.length > 0 && !p.includes('import') && !p.includes('export'));

  return paragraphs.length > 0 ? paragraphs : [cleanContent.replace(/\n/g, ' ').trim()];
}

function extractSkills(content: string): SkillCategory[] {
  const skills: SkillCategory[] = [];

  // Extract the skills object from the exported const
  const skillsObjectMatch = content.match(/export const skills = \{([\s\S]*?)\}/);

  if (!skillsObjectMatch) {
    return skills;
  }

  const skillsContent = skillsObjectMatch[1];

  // Match each category and its array of skills
  const categoryMatches = skillsContent.matchAll(/"([^"]+)":\s*\[([\s\S]*?)\]/g);

  for (const match of categoryMatches) {
    const category = match[1];
    const skillsArray = match[2];

    // Extract individual skills from the array
    const skillItems = [...skillsArray.matchAll(/"([^"]+)"/g)].map(m => m[1]);

    if (category && skillItems.length > 0) {
      skills.push({
        category,
        skills: skillItems.join(' • ')
      });
    }
  }

  return skills;
}

function extractAccreditation(content: string): Accreditation[] {
  const accreditation: Accreditation[] = [];

  const accreditationObjectMatch = content.match(/export const accreditation = \[([\s\S]*?)\]/);

  if (!accreditationObjectMatch) {
    return accreditation;
  }

  const accreditationContent = accreditationObjectMatch[1];

  const itemMatches = accreditationContent.matchAll(/\{([\s\S]*?)\}/g);

  for (const match of itemMatches) {
    const itemContent = match[1];
    const titleMatch = itemContent.match(/title: "([^"]+)"/);
    const institutionMatch = itemContent.match(/institution: "([^"]+)"/);
    const yearMatch = itemContent.match(/year: "([^"]+)"/);
    const timeMatch = itemContent.match(/time: "([^"]+)"/);

    if (titleMatch && institutionMatch) {
      accreditation.push({
        title: titleMatch[1],
        institution: institutionMatch[1],
        year: yearMatch ? yearMatch[1] : undefined,
        time: timeMatch ? timeMatch[1] : undefined,
      });
    }
  }

  return accreditation;
}

export async function getResumeData() {
  const contentDir = path.join(process.cwd(), 'src/content/resume');

  const summaryContent = fs.readFileSync(
    path.join(contentDir, 'summary.mdx'),
    'utf-8'
  );

  const recentExperienceContent = fs.readFileSync(
    path.join(contentDir, 'recent-experience.mdx'),
    'utf-8'
  );

  const pastExperienceContent = fs.readFileSync(
    path.join(contentDir, 'past-experience.mdx'),
    'utf-8'
  );

  const skillsContent = fs.readFileSync(
    path.join(contentDir, 'skills.mdx'),
    'utf-8'
  );

  const summary = extractSummary(summaryContent);
  const recentJobs = parseJobsFromMDX(recentExperienceContent);
  const pastJobs = parseJobsFromMDX(pastExperienceContent);
  const skills = extractSkills(skillsContent);
  const accreditation = extractAccreditation(skillsContent);

  return {
    summary,
    recentJobs,
    pastJobs,
    skills,
    accreditation,
  };
}
