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
INSERT INTO category (id, name,description,created_by
)
VALUES (
    '757df1cb-3811-49ee-a527-b8eacf69a642',
    'mobile',
    'Mobile phones are handheld electronic devices used for communication, work, and entertainment. Modern smartphones combine cellular calling and texting with high-speed internet access, advanced computing power, and high-resolution cameras. They serve as personal computers, media players, GPS navigators, and gaming consoles all in one portable device.',
    'f90b1f25-ea77-4e3f-af94-573aacbdc093');

-- Insert data into 'users'
INSERT INTO users (id, username,email,password_hash,active,role,created_by)
VALUES ('f90b1f25-ea77-4e3f-af94-573aacbdc093', 'aayush_100','aayush.t200@gmail.com','test123',TRUE,'admin','dd0692ec-00db-4412-853f-ba17fe434f26');


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
    $1,
    $2,
    #3,
    $4,
    $5,
    $6,
    $7,
    NOW(),
    $8
);