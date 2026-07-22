import { jsPDF } from 'jspdf';
import { EDUCATION_LIST, EXPERIENCES, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export function generateResumePDF(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 15;

  // Colors
  const primaryColor = [15, 23, 42]; // Slate 900
  const accentColor = [14, 165, 233]; // Sky 500
  const textColor = [51, 65, 85]; // Slate 700
  const grayColor = [100, 116, 139]; // Slate 500

  // Header - Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(PERSONAL_INFO.name, pageWidth / 2, y, { align: 'center' });
  y += 7;

  // Contact Row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const contactText = `${PERSONAL_INFO.phone}  |  ${PERSONAL_INFO.email}  |  github: Rajankumar69  |  LinkedIn: rajankumar69`;
  doc.text(contactText, pageWidth / 2, y, { align: 'center' });
  y += 7;

  // Horizontal Line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(15, y, pageWidth - 15, y);
  y += 6;

  // Helper Section Header
  const addSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), 15, y);
    y += 2;
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.75);
    doc.line(15, y, pageWidth - 15, y);
    y += 5;
  };

  // PROFILE SUMMARY
  addSectionHeader('Profile Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, pageWidth - 30);
  doc.text(summaryLines, 15, y);
  y += summaryLines.length * 4.5 + 4;

  // EDUCATION
  addSectionHeader('Education');
  EDUCATION_LIST.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(edu.institution, 15, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text(`${edu.location}`, pageWidth - 15, y, { align: 'right' });
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(edu.degree, 15, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    doc.text(edu.period, pageWidth - 15, y, { align: 'right' });
    y += 6;
  });

  // SKILLS
  addSectionHeader('Skills');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Technical skills:', 15, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const skillsText =
    'Tools: Python, AWS, S3, EKS, Shell Scripting, Azure, GCP, OCI, Docker, Kubernetes, Jenkins CICD, Terraform, Ansible, ArgoCD, Prometheus, Grafana, SQL, Git, Linux OS, Bash, C, C++, Java, Generative AI, Networking';
  const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 30);
  doc.text(skillsLines, 15, y);
  y += skillsLines.length * 4 + 5;

  // EXPERIENCE
  addSectionHeader('Experience');
  EXPERIENCES.forEach((exp, idx) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${idx + 1}. ${exp.company} : ${exp.role}`, 15, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);

    exp.highlights.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(`• ${bullet}`, pageWidth - 35);
      doc.text(bulletLines, 20, y);
      y += bulletLines.length * 4;
    });
    y += 2;
  });

  // PROJECTS
  addSectionHeader('Projects');
  PROJECTS.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(proj.title, 15, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);

    proj.description.forEach((line) => {
      const lineText = doc.splitTextToSize(`• ${line}`, pageWidth - 35);
      doc.text(lineText, 20, y);
      y += lineText.length * 3.8;
    });
    y += 2.5;
  });

  // ACHIEVEMENTS
  addSectionHeader('Achievements');
  const achievements = [
    '• Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate  - 98%',
    '• Oracle Cloud Infrastructure 2025 Certified Foundations Associate  - 90%',
    '• Oracle Data Platform 2025 Certified Foundations Associate  - 88%',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  achievements.forEach((ach) => {
    doc.text(ach, 20, y);
    y += 4.5;
  });

  // Save the generated document
  doc.save('Rajan_Kumar_Resume_DevOps.pdf');
}
