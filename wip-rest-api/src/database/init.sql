BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users(
--   id SERIAL PRIMARY KEY UNIQUE,
--   username VARCHAR(255) NOT NULL UNIQUE,
--   email VARCHAR(255) NOT NULL UNIQUE,
--   password VARCHAR(255)       
);

CREATE TABLE posts(
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id),
--   category VARCHAR(255) NOT NULL,
--   tool_name VARCHAR(255), 
--   tool_description VARCHAR(255), 
--   tool_link VARCHAR(255)
);

INSERT INTO users (username, email, password) VALUES ()


INSERT INTO categories (category) VALUES ()


INSERT INTO posts (user_id, cat_id, tool_name, tool_description, tool_link, date_added) VALUES
(1,3, 'Netflix', 'Stream shows and movies', 'netflix.com', '2019-08-01'),


END;