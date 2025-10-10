import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import type { JobData, SkillCategory, Accreditation } from '@/lib/resume-parser';
import { contact } from '@/app/config/site';
import path from 'path';

Font.register({
  family: 'DM Sans',
  fonts: [
    {
      src: path.join(process.cwd(), 'public/fonts/DMSans-Regular.ttf'),
      fontWeight: 'normal',
    },
    {
      src: path.join(process.cwd(), 'public/fonts/DMSans-Medium.ttf'),
      fontWeight: 500,
    }
  ],
});

Font.registerHyphenationCallback(word => (
  [word]
));

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'DM Sans'
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 4,
  },
  contactInfo: {
    flexDirection: 'row',
    gap: 12,
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 4,
    color: '#374151',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#6b7280',
    marginBottom: 3,
    letterSpacing: 0.5,
  },
  skillList: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#000000',
  },
  job: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 2,
  },
  jobCompany: {
    fontSize: 11,
    color: '#4b5563',
    marginBottom: 2,
  },
  jobDates: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 5,
  },
  responsibility: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  achievementItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  achievementStar: {
    fontWeight: 'normal',
    fontSize: 10,
    width: 10,
    height: 10,
    marginRight: 5,
    lineHeight: 1.5,
  },
  achievementText: {
    fontSize: 10,
    lineHeight: 1.5,
    fontWeight: 400,
    flex: 1,
  },
  techStack: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 6,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 16,
  },
  leftColumn: {
    width: '65%',
    marginBottom: '-24px'
  },
  rightColumn: {
    width: '35%',
  },
  accreditationItem: {
    marginBottom: 8,
  },
  accreditationTitle: {
    fontSize: 10,
    fontWeight: 500,
    marginBottom: 2,
  },
  accreditationInstitution: {
    fontSize: 9,
    color: '#4b5563',
  },
});

interface ResumePDFProps {
  summary: string[];
  recentJobs: JobData[];
  pastJobs: JobData[];
  skills: SkillCategory[];
  accreditation: Accreditation[];
}

export function ResumePDF({ summary, recentJobs, pastJobs, skills, accreditation }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{contact.name}</Text>
          <View style={styles.contactInfo}>
            <Text>{contact.website}</Text>
            <Text>•</Text>
            <Text>{contact.linkedin}</Text>
            <Text>•</Text>
            <Text>{contact.github}</Text>
            <Text>•</Text>
            <Text>{contact.phoneDisplay}</Text>
            <Text>•</Text>
            <Text>{contact.location}</Text>
          </View>
        </View>
        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          {summary.map((paragraph, index) => (
            <Text key={index} style={styles.summary}>
              {paragraph}
            </Text>
          ))}
        </View>
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent Experience</Text>
              {recentJobs.map((job, index) => (
                <View key={index} style={index === recentJobs.length - 1 ? undefined : styles.job}>
                  <Text style={styles.jobTitle}>
                    {job.title}
                  </Text>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                  <Text style={styles.jobDates}>{job.dates}{job.type && ` • ${job.type}`}</Text>
                  {job.responsibilities.map((resp, i) => (
                    <Text key={i} style={styles.responsibility}>
                      • {resp}
                    </Text>
                  ))}
                  {job.achievements && <Text style={{ marginTop: 6, marginBottom: 6, fontWeight: '500' }}>Results:</Text>}
                  {job.achievements && job.achievements.map((achievement, i) => (
                    <View key={i} style={styles.achievementItem}>
                      <Text style={styles.achievementText}>• {achievement}</Text>
                    </View>
                  ))}
                  {job.techStack && (
                    <Text style={styles.techStack}>
                      {job.techStack.join(' • ')}
                    </Text>
                  )}
                </View>
              ))}
            </View>
            {/* Past Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Past Experience</Text>
              {pastJobs.map((job, index) => (
                <View key={index} style={index === pastJobs.length - 1 ? undefined : styles.job}>
                  <Text style={styles.jobTitle}>
                    {job.title}
                  </Text>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                  <Text style={styles.jobDates}>{job.dates}{job.type && ` • ${job.type}`}</Text>
                  {job.responsibilities.map((resp, i) => (
                    <Text key={i} style={styles.responsibility}>
                      • {resp}
                    </Text>
                  ))}
                  {job.techStack && (
                    <Text style={styles.techStack}>
                      {job.techStack.join(' • ')}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
          {/* Right Column - Skills */}
          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {skills.map((skill, index) => (
                <View key={index} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                  <Text style={styles.skillList}>
                    {skill.skills}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education & Certifications</Text>
              {accreditation.map((item, index) => (
                <View key={index} style={styles.accreditationItem}>
                  <Text style={styles.accreditationTitle}>{item.title}</Text>
                  <Text style={styles.accreditationInstitution}>
                    {item.institution} - {item.year || item.time}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
