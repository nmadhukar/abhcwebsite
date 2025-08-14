-- Create SEO metadata table for managing page-level SEO content
CREATE TABLE IF NOT EXISTS public.seo_metadata (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_path VARCHAR(255) UNIQUE NOT NULL, -- e.g., '/services/mental-health', '/locations/cadiz'
    page_type VARCHAR(50) NOT NULL, -- 'service', 'location', 'blog', 'static'
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    keywords TEXT[], -- Array of keywords
    canonical_url VARCHAR(500),
    og_title VARCHAR(255),
    og_description TEXT,
    og_image_url VARCHAR(500),
    og_type VARCHAR(50) DEFAULT 'website',
    twitter_card VARCHAR(50) DEFAULT 'summary_large_image',
    twitter_title VARCHAR(255),
    twitter_description TEXT,
    twitter_image_url VARCHAR(500),
    structured_data JSONB, -- For Schema.org markup
    meta_robots VARCHAR(100) DEFAULT 'index,follow',
    priority DECIMAL(2,1) DEFAULT 0.5, -- For sitemap priority
    change_frequency VARCHAR(20) DEFAULT 'monthly', -- For sitemap
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_seo_page_path ON public.seo_metadata(page_path);
CREATE INDEX IF NOT EXISTS idx_seo_page_type ON public.seo_metadata(page_type);
CREATE INDEX IF NOT EXISTS idx_seo_active ON public.seo_metadata(is_active);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_seo_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_seo_metadata_updated_at
    BEFORE UPDATE ON public.seo_metadata
    FOR EACH ROW
    EXECUTE FUNCTION update_seo_updated_at();

-- Insert default SEO data for key pages
INSERT INTO public.seo_metadata (page_path, page_type, title, description, keywords, canonical_url, og_title, og_description, structured_data) VALUES
('/services/mental-health', 'service', 'Mental Health Services - Autumn Behavioral Health Center', 'Comprehensive mental health care including psychiatric evaluations, therapy, and crisis intervention. We treat depression, anxiety, PTSD, and more.', ARRAY['mental health services', 'psychiatric evaluation', 'therapy', 'counseling', 'crisis intervention', 'depression treatment', 'anxiety treatment'], 'https://autumntreatment.com/services/mental-health', 'Mental Health Services - Autumn Behavioral Health Center', 'Achieve emotional wellness with our evidence-based mental health treatments.', '{"@context": "https://schema.org", "@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center", "description": "Mental health services including therapy and psychiatric care"}'),

('/services/addiction-treatment', 'service', 'Addiction Treatment Services - Autumn Behavioral Health Center', 'Evidence-based addiction treatment including detox, residential care, outpatient programs, and medication-assisted treatment for lasting recovery.', ARRAY['addiction treatment', 'substance abuse treatment', 'drug rehab', 'alcohol treatment', 'detox services', 'recovery programs'], 'https://autumntreatment.com/services/addiction-treatment', 'Addiction Treatment Services - Autumn Behavioral Health Center', 'Comprehensive addiction treatment programs for lasting recovery.', '{"@context": "https://schema.org", "@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center", "description": "Addiction treatment services including detox and recovery programs"}'),

('/locations/cadiz', 'location', 'Cadiz Location - Autumn Behavioral Health Center', 'Mental health and addiction treatment services in Cadiz, Ohio. Comprehensive care with experienced professionals in a supportive environment.', ARRAY['Cadiz mental health', 'Cadiz addiction treatment', 'Ohio behavioral health', 'Harrison County treatment'], 'https://autumntreatment.com/locations/cadiz', 'Cadiz Location - Autumn Behavioral Health Center', 'Quality behavioral health services in Cadiz, Ohio.', '{"@context": "https://schema.org", "@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center - Cadiz", "address": {"@type": "PostalAddress", "addressLocality": "Cadiz", "addressRegion": "OH"}}'),

('/', 'static', 'Autumn Behavioral Health Center - Mental Health & Addiction Treatment in Ohio', 'Leading provider of mental health and addiction treatment services across Ohio. Comprehensive care, experienced professionals, and personalized treatment plans for lasting recovery.', ARRAY['mental health treatment Ohio', 'addiction treatment Ohio', 'behavioral health services', 'substance abuse treatment', 'therapy services Ohio'], 'https://autumntreatment.com', 'Autumn Behavioral Health Center - Mental Health & Addiction Treatment in Ohio', 'Leading provider of mental health and addiction treatment services across Ohio.', '{"@context": "https://schema.org", "@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center", "description": "Mental health and addiction treatment services", "address": {"@type": "PostalAddress", "addressRegion": "OH", "addressCountry": "US"}}'),

('/about', 'static', 'About Us - Autumn Behavioral Health Center', 'Learn about our mission, values, and commitment to providing exceptional mental health and addiction treatment services across Ohio with compassionate, evidence-based care.', ARRAY['about Autumn Behavioral Health', 'mental health mission', 'addiction treatment philosophy', 'Ohio healthcare provider'], 'https://autumntreatment.com/about', 'About Us - Autumn Behavioral Health Center', 'Learn about our mission and commitment to exceptional behavioral health care.', '{"@context": "https://schema.org", "@type": "AboutPage", "mainEntity": {"@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center"}}'),

('/contact', 'static', 'Contact Us - Autumn Behavioral Health Center', 'Contact Autumn Behavioral Health Center for mental health and addiction treatment services. Multiple locations across Ohio. Call (614) 219-9394 for immediate assistance.', ARRAY['contact Autumn Behavioral Health', 'mental health contact', 'addiction treatment contact', 'Ohio behavioral health phone'], 'https://autumntreatment.com/contact', 'Contact Us - Autumn Behavioral Health Center', 'Get in touch for mental health and addiction treatment services across Ohio.', '{"@context": "https://schema.org", "@type": "ContactPage", "mainEntity": {"@type": "MedicalBusiness", "name": "Autumn Behavioral Health Center", "telephone": "(614) 219-9394"}}');
