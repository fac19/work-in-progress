BEGIN;

    DROP TABLE IF EXISTS users, projects, steps, feedback;

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

    CREATE TABLE projects
    (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        project_name VARCHAR(255),
        project_description VARCHAR(255)
        -- project_status BOOLEAN
    );

    CREATE TABLE steps
    (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id),
        step_name VARCHAR(255),
        step_description VARCHAR(255),
        step_link VARCHAR(255)
    );

    CREATE TABLE feedback
    (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        project_id INTEGER REFERENCES projects(id),
        step_id INTEGER REFERENCES steps(id),
        feedback_text VARCHAR(255),
        feedback_tag VARCHAR(50)
    );

    INSERT INTO users
        (username, email, password, user_bio, user_vocation, user_link_1, user_link_2, user_link_3)
    VALUES
        ('CampbellDocherty', 'hey@123.com', 'progression', 'I am a freelance illustrator trying to make it big', 'Freelance Illustrator', 'www.facebook.com', 'www.instagram.com', 'www.dribbble.com');

    INSERT INTO projects
        (project_name, project_description)
    VALUES
        ('A tree', 'My first attempt at drawing a tree');

    INSERT INTO steps
        (step_name, step_description, step_link)
    VALUES
        ('1st sketch', 'My frst sketch of the trunk', 'https://i.pinimg.com/originals/01/0b/5e/010b5e4a0f38a9331d872ac0c179efff.jpg');

    INSERT INTO feedback
        (feedback_text, feedback_tag)
    VALUES
        ('Nice work! Look forward to seeing it in colour!', 'Compliment');

END;