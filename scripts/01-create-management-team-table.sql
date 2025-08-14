-- Create management team table
CREATE TABLE IF NOT EXISTS management_team (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(500),
  credentials VARCHAR(255),
  specialties TEXT[],
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_management_team_updated_at BEFORE UPDATE
    ON management_team FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO management_team (name, title, bio, credentials, specialties, order_index) VALUES
('Dr. Sarah Johnson', 'Chief Executive Officer', 'Dr. Johnson brings over 15 years of experience in behavioral health leadership, with a focus on evidence-based treatment approaches and organizational excellence.', 'MD, MBA', ARRAY['Leadership', 'Behavioral Health', 'Strategic Planning'], 1),
('Michael Chen', 'Chief Financial Officer', 'Michael oversees all financial operations and strategic planning, ensuring sustainable growth while maintaining our commitment to quality care.', 'CPA, MBA', ARRAY['Financial Management', 'Strategic Planning', 'Healthcare Finance'], 2),
('Dr. Emily Rodriguez', 'Clinical Director', 'Dr. Rodriguez leads our clinical team with expertise in addiction medicine and mental health treatment, ensuring the highest standards of patient care.', 'MD, ASAM', ARRAY['Addiction Medicine', 'Mental Health', 'Clinical Leadership'], 3);
