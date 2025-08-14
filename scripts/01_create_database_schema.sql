-- Autoparts Direct Database Schema
-- This script creates all necessary tables for the platform

-- Users table for tracking SMS requests
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100),
    location VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vendors table for managing auto parts suppliers
CREATE TABLE IF NOT EXISTS vendors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(200) NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255),
    location VARCHAR(100),
    business_type VARCHAR(50), -- 'marketplace', 'shop', 'individual'
    platform VARCHAR(50), -- 'jiji', 'jumia', 'instagram', 'direct'
    profile_url TEXT,
    verified BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_responses INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Part requests from users via SMS
CREATE TABLE IF NOT EXISTS part_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    original_message TEXT NOT NULL,
    processed_description TEXT, -- AI-processed part description
    car_make VARCHAR(50),
    car_model VARCHAR(50),
    car_year INTEGER,
    part_category VARCHAR(100), -- 'engine', 'brakes', 'electrical', etc.
    part_name VARCHAR(200),
    urgency_level VARCHAR(20) DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
    budget_min DECIMAL(10,2),
    budget_max DECIMAL(10,2),
    location VARCHAR(100),
    status VARCHAR(30) DEFAULT 'pending', -- 'pending', 'processing', 'sent_to_vendors', 'completed', 'cancelled'
    image_url TEXT, -- URL to uploaded part image if provided
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SMS communications log
CREATE TABLE IF NOT EXISTS sms_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(20) NOT NULL,
    message_type VARCHAR(20) NOT NULL, -- 'incoming', 'outgoing'
    message_content TEXT NOT NULL,
    request_id UUID REFERENCES part_requests(id) ON DELETE SET NULL,
    vendor_id UUID REFERENCES vendors(id) ON DELETE SET NULL,
    status VARCHAR(20) DEFAULT 'sent', -- 'sent', 'delivered', 'failed', 'pending'
    external_message_id VARCHAR(100), -- SMS provider message ID
    cost DECIMAL(8,4), -- SMS cost in Naira
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vendor responses to part requests
CREATE TABLE IF NOT EXISTS vendor_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID REFERENCES part_requests(id) ON DELETE CASCADE,
    vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
    response_message TEXT NOT NULL,
    price DECIMAL(10,2),
    availability VARCHAR(20), -- 'in_stock', 'order_required', 'not_available'
    delivery_time VARCHAR(100), -- 'same_day', '1-3_days', '1_week', etc.
    condition VARCHAR(20), -- 'new', 'used', 'refurbished'
    warranty_period VARCHAR(50),
    location VARCHAR(100),
    contact_info TEXT,
    response_time INTERVAL, -- Time taken to respond
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'expired', 'selected'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Scraped listings from external platforms
CREATE TABLE IF NOT EXISTS scraped_listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    platform VARCHAR(50) NOT NULL, -- 'jiji', 'jumia', 'instagram'
    listing_url TEXT NOT NULL,
    title VARCHAR(500),
    description TEXT,
    price DECIMAL(10,2),
    seller_name VARCHAR(200),
    seller_contact VARCHAR(100),
    location VARCHAR(100),
    condition VARCHAR(20),
    images TEXT[], -- Array of image URLs
    part_category VARCHAR(100),
    car_compatibility TEXT[], -- Array of compatible car models
    scraped_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    active BOOLEAN DEFAULT TRUE
);

-- AI processing results for part identification
CREATE TABLE IF NOT EXISTS ai_processing_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID REFERENCES part_requests(id) ON DELETE CASCADE,
    original_input TEXT NOT NULL,
    processing_type VARCHAR(30), -- 'text_analysis', 'image_recognition', 'combined'
    ai_model VARCHAR(50),
    confidence_score DECIMAL(5,4), -- 0.0000 to 1.0000
    extracted_data JSONB, -- Structured data extracted by AI
    processing_time INTERVAL,
    status VARCHAR(20) DEFAULT 'completed', -- 'processing', 'completed', 'failed'
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Request-vendor matching for tracking which vendors were contacted
CREATE TABLE IF NOT EXISTS request_vendor_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID REFERENCES part_requests(id) ON DELETE CASCADE,
    vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
    match_score DECIMAL(5,4), -- AI confidence in vendor-request match
    contacted_at TIMESTAMP WITH TIME ZONE,
    response_received BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone_number);
CREATE INDEX IF NOT EXISTS idx_vendors_phone ON vendors(phone_number);
CREATE INDEX IF NOT EXISTS idx_vendors_platform ON vendors(platform);
CREATE INDEX IF NOT EXISTS idx_part_requests_status ON part_requests(status);
CREATE INDEX IF NOT EXISTS idx_part_requests_created ON part_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_sms_logs_phone ON sms_logs(phone_number);
CREATE INDEX IF NOT EXISTS idx_sms_logs_created ON sms_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_vendor_responses_request ON vendor_responses(request_id);
CREATE INDEX IF NOT EXISTS idx_scraped_listings_platform ON scraped_listings(platform);
CREATE INDEX IF NOT EXISTS idx_scraped_listings_category ON scraped_listings(part_category);
