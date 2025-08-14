-- Create FAQ table for CMS-driven frequently asked questions
CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'general',
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create trigger for updated_at
CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON public.faqs
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_faqs_category ON public.faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_active_order ON public.faqs(is_active, display_order);

-- Insert sample FAQ data
INSERT INTO public.faqs (question, answer, category, display_order, is_active) VALUES
('What should I bring with me?', 'We recommend bringing comfortable clothing, personal toiletries, a list of any current medications, and your ID and insurance card. A detailed list will be provided by your admissions coordinator.', 'admissions', 1, true),
('Is the admissions process confidential?', 'Absolutely. All communication with our admissions team is 100% confidential and compliant with HIPAA regulations. Your privacy is our top priority.', 'admissions', 2, true),
('How long does the assessment take?', 'The initial clinical assessment typically takes between 45 to 60 minutes. This allows us to gather the necessary information to create an effective treatment plan for you.', 'admissions', 3, true),
('What insurance do you accept?', 'We accept most major insurance plans including Medicaid, Medicare, and private insurance. Our admissions team will verify your benefits and help you understand your coverage.', 'insurance', 4, true),
('Do you offer payment plans?', 'Yes, we understand that treatment costs can be a concern. We offer flexible payment plans and will work with you to find a solution that fits your financial situation.', 'insurance', 5, true),
('What types of treatment do you offer?', 'We offer comprehensive behavioral health services including outpatient therapy, intensive outpatient programs, residential treatment, detoxification services, and medication-assisted treatment.', 'treatment', 6, true),
('How long is the typical treatment program?', 'Treatment length varies based on individual needs and the level of care required. Programs can range from several weeks for intensive outpatient to several months for residential treatment.', 'treatment', 7, true),
('Can family members be involved in treatment?', 'Yes, family involvement is an important part of recovery. We offer family therapy sessions, educational programs, and support groups to help your loved ones understand and support your journey.', 'treatment', 8, true);
