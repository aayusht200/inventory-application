-- Insert data into 'products'
INSERT INTO products (
    id,
    title,
    description,
    price,
    category_id,
    active,
    quantity,
    updated_at,
    created_by
)
VALUES (
    '6d87fb5c-d5bb-4e6a-aa69-305dddbd1fe3',
    'I Phone 17',
    'The iPhone 17 features a 6.3-inch Super Retina XDR display with 120Hz ProMotion, the Apple A19 chip, and an upgraded 48MP Dual Fusion camera. The base storage is 256GB. The device includes a new Center Stage front camera and the durable Ceramic Shield 2',
    80000,
    '757df1cb-3811-49ee-a527-b8eacf69a642',
    TRUE,
    10,
    NOW(),
    'f90b1f25-ea77-4e3f-af94-573aacbdc093'
);

-- Insert data into 'category'
INSERT INTO category (id, name,description,created_by)
VALUES (
    '757df1cb-3811-49ee-a527-b8eacf69a642',
    'mobile',
    'Mobile phones are handheld electronic devices used for communication, work, and entertainment. Modern smartphones combine cellular calling and texting with high-speed internet access, advanced computing power, and high-resolution cameras. They serve as personal computers, media players, GPS navigators, and gaming consoles all in one portable device.',
    'f90b1f25-ea77-4e3f-af94-573aacbdc093');

-- Insert data into 'users'
INSERT INTO users (id, username,email,password_hash,active,role,created_by)
VALUES ('f90b1f25-ea77-4e3f-af94-573aacbdc093', 'aayush_100','aayush.t200@gmail.com','test123',TRUE,'admin','dd0692ec-00db-4412-853f-ba17fe434f26');


UPDATE products
SET image_url = CASE id
    WHEN '6d87fb5c-d5bb-4e6a-aa69-305dddbd1fe3' THEN '/images/iphone17.webp'
    WHEN 'e19dc9c6-e652-41ee-b427-7d0899e2299f' THEN '/images/iphone16.webp'
    WHEN 'b741ebf5-c3d4-41b0-9d4f-0e4cfdb52a1a' THEN '/images/galaxy-s26.jpg'
    WHEN 'fa8b95ea-489d-42bb-b1a5-1d0d4c53d962' THEN '/images/macbook-air-m5.webp'
    WHEN '1fd64b44-cb2b-4b89-82ea-65bb86f1dc2c' THEN '/images/dell-xps15.png'
    WHEN 'b5d44a68-cbba-45fd-a832-d53c88d7c13c' THEN '/images/sony-wh1000xm6.webp'
    WHEN 'bf3bc2c5-cac2-4a2d-93d5-7410b97dfe9d' THEN '/images/airpods-pro3.jpeg'
    WHEN 'e16fc6ab-d6d8-41a2-9d8c-febcb962aa45' THEN '/images/ps5-pro.webp'
    WHEN '15dc6a91-961d-41d7-91b8-31dd64a5d39d' THEN '/images/xbox-series-x.png'
    WHEN 'ea9a1dc2-74e4-489d-a8d2-1e6b3cbe6ef9' THEN '/images/usb-c-fast-charger.webp'
    WHEN '6db79b07-14e7-4f8f-a88c-0a3ef7dd6fb2' THEN '/images/mechanical-keyboard.webp'
END;


-- Select all rows from 'users'
SELECT * FROM users;