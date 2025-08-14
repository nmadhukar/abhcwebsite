-- Create locations table for CMS management
CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hours JSONB DEFAULT '{}',
  services JSONB DEFAULT '[]',
  images JSONB DEFAULT '[]',
  hero_image VARCHAR(500),
  description TEXT,
  map_url VARCHAR(500),
  seo_title VARCHAR(255),
  seo_description TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create trigger for updated_at
CREATE OR REPLACE TRIGGER update_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_locations_slug ON locations(slug);
CREATE INDEX IF NOT EXISTS idx_locations_active ON locations(is_active);
CREATE INDEX IF NOT EXISTS idx_locations_display_order ON locations(display_order);

-- Insert existing location data
INSERT INTO locations (name, slug, address, phone, email, hero_image, map_url, seo_title, seo_description, display_order) VALUES
('Cadiz', 'cadiz', '239 E Warren St, Cadiz, OH 43907', '740-942-2891', 'clinic@autumntreatment.com', '/locations/cadiz-exterior.png', 'https://maps.google.com/?q=239+E+Warren+St+Cadiz+OH+43907', 'Cadiz Location | Autumn Behavioral Health', 'Autumn Behavioral Health Cadiz location providing comprehensive behavioral health and addiction treatment services.', 1),
('Circleville', 'circleville', '1015 S Court St, Circleville, OH 43113', '740-300-0393', 'clinic@autumntreatment.com', '/locations/circleville-exterior.png', 'https://maps.google.com/?q=1015+S+Court+St+Circleville+OH+43113', 'Circleville Location | Autumn Behavioral Health', 'Autumn Behavioral Health Circleville location providing comprehensive behavioral health and addiction treatment services.', 2),
('Marion', 'marion', '165 W. Center St. Suite 304 Marion, OH 43302', '937-910-0329', 'clinic@autumntreatment.com', '/locations/marion-exterior.png', 'https://maps.google.com/?q=165+W+Center+St+Suite+304+Marion+OH+43302', 'Marion Location | Autumn Behavioral Health', 'Autumn Behavioral Health Marion location providing comprehensive behavioral health and addiction treatment services.', 3),
('Reynoldsburg', 'reynoldsburg', '1612 Lancaster Ave. Reynoldsburg, OH 43068', '740-300-1380', 'clinic@autumntreatment.com', '/locations/reynoldsburg-exterior.png', 'https://maps.google.com/?q=1612+Lancaster+Ave+Reynoldsburg+OH+43068', 'Reynoldsburg Location | Autumn Behavioral Health', 'Autumn Behavioral Health Reynoldsburg location providing comprehensive behavioral health and addiction treatment services.', 4),
('St. Clairsville', 'st-clairsville', '107 Plaza Drive, Suite #S, St. Clairsville, OH 43950', '740-895-5064', 'clinic@autumntreatment.com', '/locations/st-clairsville-exterior.png', 'https://maps.google.com/?q=107+Plaza+Drive+Suite+S+St+Clairsville+OH+43950', 'St. Clairsville Location | Autumn Behavioral Health', 'Autumn Behavioral Health St. Clairsville location providing comprehensive behavioral health and addiction treatment services.', 5),
('Washington Court House', 'washington-court-house', '321 E Court St Washington Court House, OH 43160', '937-395-7313', 'clinic@autumntreatment.com', '/locations/washington-court-house-exterior.png', 'https://maps.google.com/?q=321+E+Court+St+Washington+Court+House+OH+43160', 'Washington Court House Location | Autumn Behavioral Health', 'Autumn Behavioral Health Washington Court House location providing comprehensive behavioral health and addiction treatment services.', 6),
('Wilmington', 'wilmington', '586 W Main St. Wilmington, OH 45177', '937-599-4028', 'clinic@autumntreatment.com', '/locations/wilmington-exterior.png', 'https://maps.google.com/?q=586+W+Main+St+Wilmington+OH+45177', 'Wilmington Location | Autumn Behavioral Health', 'Autumn Behavioral Health Wilmington location providing comprehensive behavioral health and addiction treatment services.', 7);
