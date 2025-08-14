-- Enhanced location data migration with comprehensive information
-- This script adds more detailed information for each location

-- Update existing locations with enhanced data
UPDATE locations SET 
  description = 'Our Cadiz location serves Harrison County and surrounding communities with comprehensive behavioral health and addiction treatment services. Located in the heart of downtown Cadiz, our facility provides a welcoming, professional environment where individuals and families can access the care they need.',
  services = '["Outpatient Treatment", "Medication Management", "Counseling Services", "Family Support", "Mental Health Services", "Addiction Treatment"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "9:00 AM - 1:00 PM", "sunday": "Closed"}',
  images = '["/locations/cadiz-exterior.png", "/locations/cadiz-lobby.png", "/locations/cadiz-therapy-room.png"]'
WHERE slug = 'cadiz';

UPDATE locations SET 
  description = 'Our Circleville location provides comprehensive behavioral health and addiction treatment services to Pickaway County and surrounding areas. We focus on creating a supportive environment for recovery and mental wellness.',
  services = '["Mental Health Services", "Addiction Treatment", "Individual Counseling", "Group Therapy", "Case Management", "Recovery Support"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}',
  images = '["/locations/circleville-exterior.png"]'
WHERE slug = 'circleville';

UPDATE locations SET 
  description = 'Our Marion location serves Marion County with specialized behavioral health services for adults and adolescents. We provide comprehensive care in a modern, comfortable facility designed to support your journey to wellness.',
  services = '["Adult Services", "Adolescent Services", "Mental Health Treatment", "Addiction Recovery", "Family Counseling", "Psychiatric Services"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}',
  images = '["/locations/marion-exterior.png"]'
WHERE slug = 'marion';

UPDATE locations SET 
  description = 'Our Reynoldsburg location provides accessible behavioral health and addiction treatment services to Franklin County and surrounding communities. We offer comprehensive care with flexible scheduling to meet your needs.',
  services = '["Outpatient Treatment", "Mental Health Services", "Addiction Treatment", "Individual Therapy", "Group Counseling", "Medication Management"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "9:00 AM - 1:00 PM", "sunday": "Closed"}',
  images = '["/locations/reynoldsburg-exterior.png"]'
WHERE slug = 'reynoldsburg';

UPDATE locations SET 
  description = 'Our St. Clairsville location serves Belmont County and the Ohio Valley region with comprehensive behavioral health and addiction treatment services. We provide compassionate care in a welcoming environment.',
  services = '["Mental Health Services", "Addiction Treatment", "Counseling Services", "Recovery Support", "Case Management", "Family Therapy"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}',
  images = '["/locations/st-clairsville-exterior.png"]'
WHERE slug = 'st-clairsville';

UPDATE locations SET 
  description = 'Our Washington Court House location provides comprehensive behavioral health and addiction treatment services to Fayette County and surrounding areas. We are committed to supporting your recovery journey with professional, compassionate care.',
  services = '["Behavioral Health Services", "Addiction Treatment", "Mental Health Counseling", "Individual Therapy", "Group Support", "Recovery Planning"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}',
  images = '["/locations/washington-court-house-exterior.png"]'
WHERE slug = 'washington-court-house';

UPDATE locations SET 
  description = 'Our Wilmington location serves Clinton County with comprehensive behavioral health and addiction treatment services. We provide a safe, supportive environment where individuals and families can find the help they need.',
  services = '["Mental Health Services", "Addiction Recovery", "Counseling Services", "Therapy Programs", "Recovery Support", "Case Management"]',
  hours = '{"monday": "8:00 AM - 5:00 PM", "tuesday": "8:00 AM - 5:00 PM", "wednesday": "8:00 AM - 5:00 PM", "thursday": "8:00 AM - 5:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}',
  images = '["/locations/wilmington-exterior.png"]'
WHERE slug = 'wilmington';

-- Add any missing locations that might exist in the old system
INSERT INTO locations (name, slug, address, phone, email, hero_image, map_url, seo_title, seo_description, description, services, hours, display_order) 
SELECT * FROM (VALUES
  ('Cincinnati', 'cincinnati', '789 Serenity Rd, Cincinnati, OH 45202', '614-219-9394', 'clinic@autumntreatment.com', '/locations/cincinnati-exterior.png', 'https://maps.google.com/?q=789+Serenity+Rd+Cincinnati+OH+45202', 'Cincinnati Location | Autumn Behavioral Health', 'Find support at our Cincinnati, Ohio center. We provide mental health services, addiction recovery, and family counseling.', 'Our Cincinnati Riverfront office is a place of peace and healing. We focus on creating a warm, inviting atmosphere where clients can feel safe and supported.', '["Family & Couples Counseling", "Trauma-Informed Care", "Support Groups", "Mental Health First Aid"]', '{"monday": "9:00 AM - 5:00 PM", "tuesday": "9:00 AM - 5:00 PM", "wednesday": "9:00 AM - 5:00 PM", "thursday": "9:00 AM - 5:00 PM", "friday": "9:00 AM - 5:00 PM", "saturday": "Closed", "sunday": "Closed"}', 8),
  ('Cleveland', 'cleveland', '456 Recovery Ave, Cleveland, OH 44114', '614-219-9394', 'clinic@autumntreatment.com', '/locations/cleveland-exterior.png', 'https://maps.google.com/?q=456+Recovery+Ave+Cleveland+OH+44114', 'Cleveland Location | Autumn Behavioral Health', 'Comprehensive behavioral health services in Cleveland, Ohio. Mental health treatment and addiction recovery programs.', 'Our Cleveland location serves Cuyahoga County with comprehensive behavioral health and addiction treatment services in a modern, accessible facility.', '["Mental Health Services", "Addiction Treatment", "Individual Counseling", "Group Therapy", "Case Management"]', '{"monday": "8:00 AM - 6:00 PM", "tuesday": "8:00 AM - 6:00 PM", "wednesday": "8:00 AM - 6:00 PM", "thursday": "8:00 AM - 6:00 PM", "friday": "8:00 AM - 5:00 PM", "saturday": "9:00 AM - 1:00 PM", "sunday": "Closed"}', 9),
  ('Columbus', 'columbus', '123 Wellness Way, Columbus, OH 43215', '614-219-9394', 'clinic@autumntreatment.com', '/locations/columbus-exterior.png', 'https://maps.google.com/?q=123+Wellness+Way+Columbus+OH+43215', 'Columbus Location | Autumn Behavioral Health', 'Autumn Behavioral Health Columbus location providing comprehensive behavioral health and addiction treatment services.', 'Our Columbus location serves Franklin County and central Ohio with comprehensive behavioral health and addiction treatment services in our flagship facility.', '["Comprehensive Behavioral Health", "Addiction Treatment", "Mental Health Services", "Individual & Group Therapy", "Psychiatric Services", "Case Management"]', '{"monday": "7:00 AM - 7:00 PM", "tuesday": "7:00 AM - 7:00 PM", "wednesday": "7:00 AM - 7:00 PM", "thursday": "7:00 AM - 7:00 PM", "friday": "7:00 AM - 6:00 PM", "saturday": "8:00 AM - 2:00 PM", "sunday": "Closed"}', 10)
) AS new_locations(name, slug, address, phone, email, hero_image, map_url, seo_title, seo_description, description, services, hours, display_order)
WHERE NOT EXISTS (
  SELECT 1 FROM locations WHERE locations.slug = new_locations.slug
);

-- Update display order to ensure proper sorting
UPDATE locations SET display_order = 1 WHERE slug = 'cadiz';
UPDATE locations SET display_order = 2 WHERE slug = 'circleville';
UPDATE locations SET display_order = 3 WHERE slug = 'marion';
UPDATE locations SET display_order = 4 WHERE slug = 'reynoldsburg';
UPDATE locations SET display_order = 5 WHERE slug = 'st-clairsville';
UPDATE locations SET display_order = 6 WHERE slug = 'washington-court-house';
UPDATE locations SET display_order = 7 WHERE slug = 'wilmington';
UPDATE locations SET display_order = 8 WHERE slug = 'cincinnati';
UPDATE locations SET display_order = 9 WHERE slug = 'cleveland';
UPDATE locations SET display_order = 10 WHERE slug = 'columbus';
