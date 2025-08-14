export interface PageContentData {
  [key: string]: any
}

// This object holds the editable content for various pages.
// The admin panel will edit this data, and the pages will consume it.
export const pageData: PageContentData = {
  home: {
    hero: { title: "Welcome to Autumn Behavioral Health", subtitle: "Your path to recovery starts here." },
    stats: { stat1: "10,000+ Lives Changed", stat2: "25+ Years of Service" },
  },
  about: {
    hero: {
      title: "About Autumn Behavioral Health Center",
      subtitle:
        "For over 25 years, we've been Ohio's trusted partner in behavioral health care, providing compassionate, evidence-based treatment that transforms lives and strengthens communities.",
    },
    missionVision: {
      missionTitle: "Our Mission",
      missionText:
        "To provide comprehensive, compassionate behavioral health services that empower individuals and families to achieve lasting recovery, wellness, and hope for the future.",
      visionTitle: "Our Vision",
      visionText:
        "To be Ohio's leading provider of behavioral health services, recognized for our innovation, excellence, and commitment to transforming lives through evidence-based care.",
    },
    story: {
      title: "Our Story",
      subtitle: "25+ Years of Healing",
      paragraph1:
        "Founded with a simple yet powerful belief that everyone deserves access to quality behavioral health care, Autumn Behavioral Health Center has grown from a small community clinic to one of Ohio's most trusted behavioral health providers.",
      paragraph2:
        "Our journey began with a commitment to treating the whole person, not just the symptoms. This holistic approach, combined with evidence-based practices and genuine compassion, has helped thousands of individuals and families find their path to recovery and wellness.",
      paragraph3:
        "Today, we continue to innovate and expand our services, always staying true to our core values of compassion, excellence, and hope.",
    },
  },
  "management-team": {
    hero: { title: "Our Management Team", subtitle: "Meet the dedicated leaders who guide our mission." },
  },
  "services-addiction-treatment": {
    hero: { title: "Addiction Treatment Services", subtitle: "Comprehensive care for substance use disorders." },
  },
  "services-case-management": {
    hero: { title: "Case Management", subtitle: "Personalized support for your recovery journey." },
  },
  "services-mental-health": {
    hero: { title: "Mental Health Services", subtitle: "Compassionate care for mental wellness." },
  },
  "services-methadone-treatment": {
    hero: { title: "Methadone Treatment (OTP)", subtitle: "Medication-assisted treatment for opioid addiction." },
  },
  "services-outpatient": {
    hero: { title: "Outpatient Programs", subtitle: "Flexible treatment options to fit your life." },
  },
  "services-recovery-housing": {
    hero: { title: "Recovery Housing", subtitle: "Supportive, sober living environments." },
  },
  "services-residential": {
    hero: { title: "Residential Treatment", subtitle: "Immersive care in a structured environment." },
  },
  "services-residential-detox": {
    hero: { title: "Residential Detox", subtitle: "Safe, medically-supervised detoxification." },
  },
  admissions: {
    hero: { title: "Admissions", subtitle: "Start your journey to recovery today." },
  },
  insurance: {
    hero: { title: "Insurance & PPO", subtitle: "We accept a wide range of insurance plans." },
  },
  contact: {
    title: "Contact Us",
    subtitle: "Reach out to us 24/7. We are here to help you take the first step towards recovery.",
    address: {
      line1: "732 Main St",
      line2: "Toledo, OH 43605",
    },
    phone: {
      main: "(614) 219-9394",
      admissions: "(614) 219-9394",
    },
    email: "clinic@autumntreatment.com",
    hero: {
      title: "Contact Us",
      subtitle: "We're here to help you take the first step toward recovery and healing.",
    },
    locations: {
      title: "Our Locations",
      subtitle: "Find the location nearest you and discover the comprehensive services we offer.",
    },
  },
  privacy: {
    content: { title: "Privacy Policy", text: "Your privacy is important to us." },
  },
  terms: {
    content: { title: "Terms of Service", text: "Please read our terms of service." },
  },
  accessibility: {
    content: { title: "Accessibility Statement", text: "We are committed to accessibility." },
  },
  hipaa: {
    content: { title: "HIPAA Notice of Privacy Practices", text: "Your rights under HIPAA." },
  },
}
