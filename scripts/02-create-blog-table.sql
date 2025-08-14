-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url VARCHAR(500),
  author_name VARCHAR(255) NOT NULL,
  author_title VARCHAR(255),
  category VARCHAR(100),
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger for blog posts
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE
    ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create index for slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author_name, author_title, category, tags, is_published, is_featured, published_at) VALUES
('Understanding Addiction Recovery: A Comprehensive Guide', 'understanding-addiction-recovery-guide', 'Recovery from addiction is a journey that requires understanding, support, and professional guidance. Learn about the key components of successful recovery.', 'Recovery from addiction is a complex process that involves multiple stages and requires comprehensive support. At Autumn Behavioral Health Center, we understand that each person''s journey is unique...', 'Dr. Emily Rodriguez', 'Clinical Director', 'Recovery', ARRAY['addiction', 'recovery', 'treatment'], true, true, NOW() - INTERVAL '2 days'),
('The Importance of Mental Health in Overall Wellness', 'mental-health-overall-wellness', 'Mental health is a crucial component of overall wellness. Discover how taking care of your mental health can improve your quality of life.', 'Mental health affects every aspect of our lives, from our relationships to our work performance. Understanding the connection between mental and physical health is essential...', 'Dr. Sarah Johnson', 'CEO', 'Mental Health', ARRAY['mental health', 'wellness', 'self-care'], true, false, NOW() - INTERVAL '5 days'),
('Family Support in Addiction Treatment', 'family-support-addiction-treatment', 'Family involvement can significantly impact the success of addiction treatment. Learn how families can provide effective support during recovery.', 'Family support plays a vital role in addiction recovery. When families are educated and involved in the treatment process, outcomes improve significantly...', 'Michael Chen', 'CFO', 'Family Support', ARRAY['family', 'support', 'addiction', 'treatment'], true, false, NOW() - INTERVAL '1 week');
