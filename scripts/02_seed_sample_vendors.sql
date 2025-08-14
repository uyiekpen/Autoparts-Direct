-- Sample vendor data for testing
-- This script populates the vendors table with initial data

INSERT INTO vendors (name, phone_number, email, location, business_type, platform, verified, rating, active) VALUES
-- Jiji vendors
('AutoParts Lagos Central', '+2348012345001', 'info@autopartslagos.com', 'Lagos Island, Lagos', 'shop', 'jiji', true, 4.5, true),
('Kano Motor Spares', '+2348012345002', 'kanomotor@gmail.com', 'Sabon Gari, Kano', 'shop', 'jiji', true, 4.2, true),
('Abuja Car Parts Hub', '+2348012345003', 'abujacars@yahoo.com', 'Wuse 2, Abuja', 'shop', 'jiji', true, 4.7, true),

-- Jumia vendors
('Premium Auto Solutions', '+2348012345004', 'premium@autosolutions.ng', 'Victoria Island, Lagos', 'marketplace', 'jumia', true, 4.8, true),
('Northern Auto Supplies', '+2348012345005', 'northern@autosupplies.com', 'Kaduna North, Kaduna', 'marketplace', 'jumia', true, 4.3, true),

-- Instagram vendors
('Lagos Auto Parts IG', '+2348012345006', null, 'Ikeja, Lagos', 'individual', 'instagram', false, 4.1, true),
('Port Harcourt Motors', '+2348012345007', null, 'Port Harcourt, Rivers', 'individual', 'instagram', false, 3.9, true),
('Ibadan Car Clinic', '+2348012345008', 'ibadanclinic@gmail.com', 'Ibadan, Oyo', 'shop', 'instagram', true, 4.4, true),

-- Direct vendors
('Mechanic Village Alaba', '+2348012345009', 'alaba@mechanicvillage.ng', 'Alaba Market, Lagos', 'shop', 'direct', true, 4.6, true),
('Onitsha Auto Market', '+2348012345010', 'onitsha@automarket.com', 'Main Market, Onitsha', 'shop', 'direct', true, 4.0, true);
