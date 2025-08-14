-- Insert sample blog posts for Autumn Behavioral Health Center
INSERT INTO blog_posts (
  title, 
  slug, 
  excerpt, 
  content, 
  author, 
  status, 
  featured_image, 
  seo_title, 
  seo_description, 
  seo_keywords,
  published_at
) VALUES 
(
  'Understanding the Journey to Recovery: A Comprehensive Guide',
  'understanding-journey-to-recovery-comprehensive-guide',
  'Recovery is a personal journey that looks different for everyone. Learn about the stages of recovery and how to build a strong foundation for lasting sobriety.',
  '<h2>The Path to Recovery Begins with Understanding</h2>
  <p>Recovery from addiction is not a destination but a lifelong journey of growth, healing, and self-discovery. At Autumn Behavioral Health Center, we believe that understanding the recovery process is crucial for both individuals seeking help and their loved ones.</p>
  
  <h3>The Stages of Recovery</h3>
  <p>Recovery typically involves several stages:</p>
  <ul>
    <li><strong>Pre-contemplation:</strong> Not yet recognizing the need for change</li>
    <li><strong>Contemplation:</strong> Acknowledging the problem and considering change</li>
    <li><strong>Preparation:</strong> Making plans and commitments to change</li>
    <li><strong>Action:</strong> Actively working on recovery</li>
    <li><strong>Maintenance:</strong> Sustaining positive changes long-term</li>
  </ul>
  
  <h3>Building Your Support Network</h3>
  <p>Recovery is not a journey you have to take alone. Building a strong support network is essential for long-term success. This includes family, friends, healthcare providers, and peer support groups.</p>
  
  <h3>The Role of Professional Treatment</h3>
  <p>Professional treatment provides the tools, strategies, and medical support necessary for safe and effective recovery. Our comprehensive programs at Autumn Behavioral Health Center are designed to address the physical, emotional, and psychological aspects of addiction.</p>',
  'Dr. Sarah Johnson',
  'published',
  '/blog/recovery-journey.jpg',
  'Understanding Recovery: Complete Guide to Addiction Treatment | Autumn Behavioral Health',
  'Learn about the stages of recovery and how to build a strong foundation for lasting sobriety. Expert guidance from Autumn Behavioral Health Center in Ohio.',
  'addiction recovery, substance abuse treatment, recovery stages, Ohio addiction treatment, behavioral health',
  NOW() - INTERVAL '7 days'
),
(
  'The Importance of Mental Health in Addiction Recovery',
  'importance-mental-health-addiction-recovery',
  'Dual diagnosis treatment addresses both addiction and mental health conditions simultaneously, providing a more comprehensive approach to healing.',
  '<h2>Understanding Dual Diagnosis</h2>
  <p>Many individuals struggling with addiction also face mental health challenges such as depression, anxiety, PTSD, or bipolar disorder. This combination, known as dual diagnosis or co-occurring disorders, requires specialized treatment approaches.</p>
  
  <h3>Common Co-Occurring Disorders</h3>
  <p>The most frequently seen mental health conditions alongside addiction include:</p>
  <ul>
    <li>Depression and mood disorders</li>
    <li>Anxiety disorders</li>
    <li>Post-traumatic stress disorder (PTSD)</li>
    <li>Bipolar disorder</li>
    <li>Attention-deficit/hyperactivity disorder (ADHD)</li>
  </ul>
  
  <h3>Integrated Treatment Approach</h3>
  <p>At Autumn Behavioral Health Center, we use an integrated treatment model that addresses both addiction and mental health simultaneously. This approach has been shown to be more effective than treating each condition separately.</p>
  
  <h3>The Benefits of Comprehensive Care</h3>
  <p>When mental health and addiction are treated together, individuals experience better outcomes, reduced relapse rates, and improved overall quality of life. Our team of psychiatrists, therapists, and addiction specialists work together to create personalized treatment plans.</p>',
  'Dr. Michael Chen',
  'published',
  '/blog/mental-health-recovery.jpg',
  'Mental Health & Addiction Recovery: Dual Diagnosis Treatment | Autumn Behavioral Health',
  'Learn how dual diagnosis treatment addresses both addiction and mental health conditions for comprehensive healing. Expert care in Ohio.',
  'dual diagnosis, mental health treatment, co-occurring disorders, integrated treatment, Ohio mental health',
  NOW() - INTERVAL '14 days'
),
(
  'Family Support: A Crucial Component of Recovery Success',
  'family-support-crucial-component-recovery-success',
  'Family involvement in addiction treatment significantly improves outcomes. Learn how families can support their loved ones while maintaining healthy boundaries.',
  '<h2>The Power of Family in Recovery</h2>
  <p>Addiction affects not just the individual, but the entire family system. Research consistently shows that family involvement in treatment leads to better outcomes and longer-lasting recovery.</p>
  
  <h3>How Families Can Help</h3>
  <p>Families play a vital role in recovery through:</p>
  <ul>
    <li>Providing emotional support and encouragement</li>
    <li>Participating in family therapy sessions</li>
    <li>Learning about addiction as a disease</li>
    <li>Setting healthy boundaries</li>
    <li>Creating a supportive home environment</li>
  </ul>
  
  <h3>Family Therapy Programs</h3>
  <p>Our family therapy programs at Autumn Behavioral Health Center help families heal together. These sessions address communication patterns, rebuild trust, and develop healthy coping strategies for the entire family.</p>
  
  <h3>Supporting Without Enabling</h3>
  <p>Learning the difference between support and enabling is crucial. We help families understand how to offer love and encouragement while maintaining boundaries that promote accountability and growth.</p>
  
  <h3>Resources for Families</h3>
  <p>We offer educational workshops, support groups, and resources specifically designed for family members. These programs provide tools and strategies for navigating the challenges of supporting a loved one in recovery.</p>',
  'Lisa Rodriguez, LCSW',
  'published',
  '/blog/family-support.jpg',
  'Family Support in Addiction Recovery: How Families Can Help | Autumn Behavioral Health',
  'Discover how family involvement improves addiction recovery outcomes. Learn about family therapy and support programs in Ohio.',
  'family therapy, addiction recovery support, family involvement, enabling vs supporting, Ohio family programs',
  NOW() - INTERVAL '21 days'
),
(
  'Overcoming Stigma: Breaking Down Barriers to Treatment',
  'overcoming-stigma-breaking-down-barriers-treatment',
  'Stigma surrounding addiction and mental health prevents many from seeking help. Learn how to overcome these barriers and find the support you deserve.',
  '<h2>Understanding Addiction Stigma</h2>
  <p>Despite significant advances in understanding addiction as a medical condition, stigma remains one of the biggest barriers to treatment. Many individuals delay seeking help due to shame, fear of judgment, or misconceptions about addiction.</p>
  
  <h3>Common Myths About Addiction</h3>
  <p>Let''s address some persistent myths:</p>
  <ul>
    <li><strong>Myth:</strong> Addiction is a choice or moral failing</li>
    <li><strong>Truth:</strong> Addiction is a chronic medical condition that changes brain chemistry</li>
    <li><strong>Myth:</strong> People with addiction lack willpower</li>
    <li><strong>Truth:</strong> Recovery requires medical treatment, not just willpower</li>
    <li><strong>Myth:</strong> Treatment doesn''t work</li>
    <li><strong>Truth:</strong> Evidence-based treatment is highly effective</li>
  </ul>
  
  <h3>The Impact of Stigma</h3>
  <p>Stigma can lead to delayed treatment, social isolation, employment discrimination, and reduced quality of life. It affects not only individuals with addiction but also their families and communities.</p>
  
  <h3>Creating Stigma-Free Environments</h3>
  <p>At Autumn Behavioral Health Center, we are committed to providing compassionate, non-judgmental care. Our staff understands that seeking treatment is a sign of strength, not weakness.</p>
  
  <h3>How You Can Help Reduce Stigma</h3>
  <p>Everyone can play a role in reducing stigma by using person-first language, sharing accurate information about addiction, and supporting policies that improve access to treatment.</p>',
  'Dr. Amanda Foster',
  'published',
  '/blog/overcoming-stigma.png',
  'Overcoming Addiction Stigma: Breaking Barriers to Treatment | Autumn Behavioral Health',
  'Learn how to overcome stigma and barriers to addiction treatment. Find compassionate, non-judgmental care in Ohio.',
  'addiction stigma, barriers to treatment, person-first language, compassionate care, Ohio addiction help',
  NOW() - INTERVAL '28 days'
),
(
  'The Science Behind Addiction: Understanding Brain Changes',
  'science-behind-addiction-understanding-brain-changes',
  'Addiction fundamentally changes how the brain works. Understanding these neurological changes helps explain why addiction is a medical condition requiring professional treatment.',
  '<h2>How Addiction Affects the Brain</h2>
  <p>Addiction is fundamentally a brain disease. Substances and certain behaviors trigger changes in brain structure and function, particularly in areas responsible for reward, motivation, and decision-making.</p>
  
  <h3>The Brain''s Reward System</h3>
  <p>The brain''s reward system evolved to reinforce behaviors necessary for survival. Addictive substances hijack this system, creating powerful cravings and compulsive use despite negative consequences.</p>
  
  <h3>Neuroplasticity and Recovery</h3>
  <p>The good news is that the brain has remarkable ability to heal and adapt. Through proper treatment and sustained recovery, many of the changes caused by addiction can be reversed or compensated for.</p>
  
  <h3>Evidence-Based Treatment Approaches</h3>
  <p>Understanding the neuroscience of addiction has led to more effective treatments:</p>
  <ul>
    <li>Medication-assisted treatment (MAT)</li>
    <li>Cognitive-behavioral therapy (CBT)</li>
    <li>Mindfulness-based interventions</li>
    <li>Neurofeedback therapy</li>
  </ul>
  
  <h3>The Role of Genetics</h3>
  <p>Research shows that genetics account for approximately 40-60% of addiction risk. This doesn''t mean addiction is predetermined, but it helps explain why some people are more vulnerable than others.</p>
  
  <h3>Hope for Recovery</h3>
  <p>Understanding addiction as a brain disease removes blame and shame while emphasizing the importance of professional treatment. With proper care, the brain can heal, and full recovery is possible.</p>',
  'Dr. Robert Kim, MD',
  'published',
  '/blog/science-of-addiction.jpg',
  'The Science of Addiction: How Addiction Changes the Brain | Autumn Behavioral Health',
  'Understand how addiction affects the brain and why professional treatment is essential. Learn about neuroplasticity and recovery in Ohio.',
  'neuroscience of addiction, brain changes, neuroplasticity, addiction science, medical treatment, Ohio addiction medicine',
  NOW() - INTERVAL '35 days'
);
