export interface TeamMember {
  id: number
  name: string
  title: string
  email: string
  bio: string
  education: string
  specialties: string[]
  imageUrl: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson, MD",
    title: "Chief Executive Officer & Medical Director",
    imageUrl: "/professional-woman-ceo.png",
    bio: "Dr. Johnson brings over 20 years of experience in healthcare administration and psychiatric medicine. She completed her medical degree at Ohio State University and her residency in psychiatry at Cleveland Clinic. Under her leadership, Autumn Behavioral Health has expanded to serve over 10,000 patients annually across multiple locations.",
    education: "MD - Ohio State University, Residency - Cleveland Clinic",
    specialties: ["Healthcare Administration", "Psychiatric Medicine", "Strategic Planning"],
    email: "s.johnson@autumntreatment.com",
  },
  {
    id: 2,
    name: "Michael Chen, LCSW",
    title: "Chief Clinical Officer",
    imageUrl: "/professional-man-doctor.png",
    bio: "Michael oversees all clinical operations and ensures the highest standards of patient care across our facilities. With 15 years of experience in addiction treatment and mental health services, he has developed innovative treatment protocols that have improved patient outcomes significantly.",
    education: "MSW - Case Western Reserve University, LCSW - Ohio",
    specialties: ["Addiction Treatment", "Clinical Operations", "Program Development"],
    email: "m.chen@autumntreatment.com",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez, PhD",
    title: "Director of Mental Health Services",
    imageUrl: "/professional-woman-therapist.png",
    bio: "Dr. Rodriguez leads our mental health programs and specializes in trauma-informed care and evidence-based therapies. She has published numerous research papers on PTSD treatment and has been instrumental in developing our specialized trauma recovery programs.",
    education: "PhD in Clinical Psychology - University of Cincinnati",
    specialties: ["Trauma-Informed Care", "PTSD Treatment", "Research & Development"],
    email: "e.rodriguez@autumntreatment.com",
  },
  {
    id: 4,
    name: "James Thompson, MBA, LCDC",
    title: "Director of Addiction Services",
    imageUrl: "/professional-man-director.png",
    bio: "James brings both personal recovery experience and professional expertise to his role. With an MBA in Healthcare Management and certification as a Licensed Chemical Dependency Counselor, he has transformed our addiction treatment programs to achieve industry-leading success rates.",
    education: "MBA - Xavier University, LCDC - Ohio",
    specialties: ["Addiction Treatment", "Recovery Programs", "Healthcare Management"],
    email: "j.thompson@autumntreatment.com",
  },
  {
    id: 5,
    name: "Lisa Park, RN, MSN",
    title: "Director of Nursing",
    imageUrl: "/professional-woman-nurse.png",
    bio: "Lisa oversees all nursing operations and medical care coordination across our facilities. With her Master's in Nursing and 18 years of experience in psychiatric and addiction medicine, she ensures the highest standards of medical care for all our patients.",
    education: "MSN - Ohio University, RN - Ohio Board of Nursing",
    specialties: ["Psychiatric Nursing", "Medical Care Coordination", "Staff Development"],
    email: "l.park@autumntreatment.com",
  },
  {
    id: 6,
    name: "Robert Davis, CPA, MBA",
    title: "Chief Financial Officer",
    imageUrl: "/professional-cfo.png",
    bio: "Robert manages all financial operations and strategic planning for Autumn Behavioral Health. His expertise in healthcare finance and operations has been crucial in our expansion while maintaining financial stability and ensuring accessible care for all patients.",
    education: "MBA - Ohio State University, CPA - Ohio",
    specialties: ["Healthcare Finance", "Strategic Planning", "Operations Management"],
    email: "r.davis@autumntreatment.com",
  },
]
