-- Utility functions for the Autoparts Direct platform

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vendors_updated_at BEFORE UPDATE ON vendors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_part_requests_updated_at BEFORE UPDATE ON part_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vendor_responses_updated_at BEFORE UPDATE ON vendor_responses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate vendor response time statistics
CREATE OR REPLACE FUNCTION calculate_vendor_stats(vendor_uuid UUID)
RETURNS TABLE(
    avg_response_time INTERVAL,
    total_responses BIGINT,
    success_rate DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        AVG(vr.response_time) as avg_response_time,
        COUNT(*) as total_responses,
        ROUND(
            (COUNT(*) FILTER (WHERE vr.status = 'active')::DECIMAL / COUNT(*)) * 100, 
            2
        ) as success_rate
    FROM vendor_responses vr
    WHERE vr.vendor_id = vendor_uuid;
END;
$$ LANGUAGE plpgsql;

-- Function to get active requests needing vendor responses
CREATE OR REPLACE FUNCTION get_pending_requests()
RETURNS TABLE(
    request_id UUID,
    user_phone VARCHAR(20),
    part_description TEXT,
    car_info TEXT,
    location VARCHAR(100),
    created_hours_ago NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        pr.id as request_id,
        u.phone_number as user_phone,
        pr.processed_description as part_description,
        CONCAT(pr.car_make, ' ', pr.car_model, ' ', pr.car_year) as car_info,
        pr.location,
        EXTRACT(EPOCH FROM (NOW() - pr.created_at))/3600 as created_hours_ago
    FROM part_requests pr
    JOIN users u ON pr.user_id = u.id
    WHERE pr.status IN ('pending', 'processing', 'sent_to_vendors')
    ORDER BY pr.created_at ASC;
END;
$$ LANGUAGE plpgsql;
