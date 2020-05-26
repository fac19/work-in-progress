BEGIN;

    DROP TABLE IF EXISTS users, projects, steps, feedback, user_watch;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY UNIQUE,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        user_bio VARCHAR(255),
        user_vocation VARCHAR(50),
        user_link_1 VARCHAR(50),
        user_link_2 VARCHAR(50),
        user_link_3 VARCHAR(50)
    );

    INSERT INTO users
        (username, email, password, user_bio, user_vocation, user_link_1, user_link_2, user_link_3)
    VALUES
        ('CampbellDocherty', 'CY@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I am a freelance illustrator trying to make it big', 'freelance illustrator', 'www.twitter.com', 'www.arena.com', 'www.facebook.com'),
        ('Jacko', 'JO@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I love colours they are so nice', 'professional animator', 'www.facebook.com', 'www.instagram.com', 'www.twitter.com'),
        ('Hanhan', 'HN@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I hope I get a well-paid secure job in the arts', 'student graphic designer', 'www.facebook.com', 'www.twitter.com', 'www.arena.com'),
        ('KDrizzle', 'KE@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I animate out and about', 'freelance animator', 'www.instagram.com', 'www.ucas.com', 'www.dribbble.com');

    CREATE TABLE projects
    (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        project_name VARCHAR(255) NOT NULL,
        project_description VARCHAR(255),
        project_status BOOLEAN
    );

    INSERT INTO projects
        (user_id, project_name, project_description, project_status)
    VALUES
        ('1', 'A tree', 'My first attempt at drawing a tree', 'false'),
        ('3', 'A dog', 'My dog Bernard', 'false'),
        ('2', 'A moon', 'Jupiters amazing moon', 'true'),
        ('1', 'A friend', 'Jane who brings me eggs', 'false'),
        ('4', 'A global pandemic', 'Madness total madness', 'true');

    CREATE TABLE steps
    (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        step_name VARCHAR(255),
        step_description VARCHAR(255),
        step_link VARCHAR(255),
        date TIMESTAMP
        WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO steps
        (project_id, step_name, step_description, step_link)
    VALUES
        ('1', '1 1st sketch', '1 The trunk', '/images/1.jpg'),
        ('2', '2 1st sketch', '2 The tail', '/images/2.jpg'),
        ('1', '1 2nd sketch', '1 The leaves', '/images/3.jpg'),
        ('4', '4 1st sketch', '4 Their nose', '/images/4.jpg'),
        ('1', '1 3rd sketch', '1 Some roots', '/images/5.jpg'),
        ('5', '5 1st sketch', '5 Viruses', '/images/6.jpg'),
        ('4', '4 2nd sketch', '4 Their feet', '/images/7.jpg'),
        ('3', '3 1st sketch', '3 round and bright', '/images/8.jpg'),
        ('2', '2 2nd sketch', '2 A cute nose', '/images/9.jpg'),
        ('1', '1 4th sketch', '1 someone hugging it', '/images/10.jpg');

    CREATE TABLE feedback
    (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        step_id INTEGER REFERENCES steps(id) ON DELETE CASCADE,
        feedback_text VARCHAR(255) NOT NULL,
        feedback_tag VARCHAR(50),
        date TIMESTAMP
        WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO feedback
        (user_id, step_id, feedback_text, feedback_tag)
    VALUES
        ('1', '2', 'Hey Han its Cam what a nice dog', 'compliment'),
        ('4', '7', 'Hey Cammy its Kat I think this needs 5 toes', 'feedback'),
        ('3', '8', 'Hey J man its Han have you considered craters', 'feedback'),
        ('2', '6', 'Hey Katkat its Jack I love your interpretation', 'compliment');

    CREATE TABLE user_watch
    (
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
    );

    INSERT INTO user_watch
        (user_id, project_id)
    VALUES
        ('1', '2'),
        ('2', '1'),
        ('2', '2'),
        ('2', '4'),
        ('2', '5'),
        ('3', '3'),
        ('4', '4');

END;