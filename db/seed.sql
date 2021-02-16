DROP TABLE IF EXISTS helo_users;
DROP TABLE IF EXISTS helo_posts;

CREATE TABLE helo_users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(40) NOT NULL,
password VARCHAR(40) NOT NULL,
profile_pic TEXT
);

CREATE TABLE helo_posts (
post_id SERIAL PRIMARY KEY,
title VARCHAR(45) NOT NULL,
content TEXT,
img TEXT,
author_id INTEGER REFERENCES helo_users(user_id),
date_created TIMESTAMP
);