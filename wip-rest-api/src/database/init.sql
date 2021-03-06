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
        ('cammyd', 'cammyd@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I am a freelance illustrator trying to make it big', 'freelance illustrator', 'www.twitter.com', 'www.arena.com', 'www.facebook.com'),
        ('jacko', 'jacko@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I love colours they are so nice', 'professional animator', 'www.facebook.com', 'www.instagram.com', 'www.twitter.com'),
        ('hanhan', 'hanhan@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I hope I get a well-paid secure job in the arts', 'student graphic designer', 'www.facebook.com', 'www.twitter.com', 'www.arena.com'),
        ('kdrizzle', 'kdrizzle@123.com', '$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse', 'I animate out and about', 'freelance animator', 'www.instagram.com', 'www.ucas.com', 'www.dribbble.com');

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
        ('1', 'Plant Lover', 'Me looking for plants to propagate', 'false'),
        ('2', 'The cutest dog in the world', 'My dog Bernard', 'false'),
        ('3', 'Working from home', 'My cosy work station at home', 'true'),
        ('4', 'My trusty sidekick', 'I wanted to pay homage to the OG Gameboy', 'false'),
        ('2', 'My friend Amy', 'I want to draw my lovely friend Amy as a surprise for her', 'false'),
        ('4', 'Me, a developer', 'Self portrait of me coding 24/7', 'false');

    CREATE TABLE steps
    (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        step_name VARCHAR(255),
        step_description VARCHAR(255),
        step_link VARCHAR(8000),
        date TIMESTAMP
        WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO steps
        (project_id, step_name, step_description, step_link, date)
    VALUES
        ('1', 'Quick sketch', 'I have roughly mapped out what I want the drawing to look like. It is not a complete concept yet, but I would love some feedback on what I have so far', 'https://i.imgur.com/HGpC61f.gif', '2020-05-28T18:06:18.438Z'),
        ('2', 'Initial sketch', 'I would like to add some color, any suggestions?', 'https://i.imgur.com/q7SpqwW.png', '2020-05-28T18:06:18.438Z'),
        ('3', 'Sketch process', 'I wanted to get feedback on the composition please', 'https://i.imgur.com/gjPq2p6.gif', '2020-05-28T18:06:18.438Z'),
        ('4', 'Mock-up', 'Experimenting with clean lines and shading for the first time in Adobe Illustrator, how did I do?', 'https://i.imgur.com/SEpp1Oe.png', '2020-05-28T18:06:18.438Z'),
        ('2', 'Adding colour', 'Thank you for all the feedback, I have added these colours - hope you like them!', 'https://i.imgur.com/t9ftxxf.png', '2020-05-28T18:30:28.326Z'),
        ('1', 'Bold lines', 'Experimenting with lines and solid shapes before I add colours.', 'https://i.imgur.com/g9ykRNK.png', '2020-05-28T18:32:48.385Z'),
        ('1', 'Colouring in', 'I really like how this turned out, feedback welcome!', 'https://i.imgur.com/htMAS5G.png', '2020-05-28T18:33:30.228Z'),
        ('3', 'Line drawing', 'Thank you for the advice everyone, what features can I add?', 'https://i.imgur.com/cJYNRJ8.png', '2020-05-28T18:35:06.736Z'),
        ('4', 'Initial colour scheme', 'I have added a splash of colour but I am not sure about it, any suggestions?', 'https://i.imgur.com/saupxYG.png', '2020-05-28T18:36:40.836Z'),
        ('5', 'Initial sketch', 'Taking a sketch I did of myself an adapting it to turn into a woman figure.', 'https://i.imgur.com/u6Xts8e.gif', '2020-05-28T22:04:11.422Z'),
        ('5', 'Line drawing', 'Made some improvements!', 'https://i.imgur.com/41bbxoq.png', '2020-05-28T22:05:46.379Z'),
        ('5', 'First concept', 'Let me know what you think please!', 'https://i.imgur.com/D4qh1c2.png', '2020-05-28T22:11:45.311Z'),
        ('6', 'Sketch', 'Having a play around with lines and shading...', 'https://i.imgur.com/hLI83KC.gif', '2020-05-28T22:20:20.198Z');

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
        ('1', '2', 'Hey Jacko it is Cam, what a nice dog!', 'compliment'),
        ('2', '4', 'Hey Katkat its Jack I love your interpretation', 'compliment'),
        ('3', '1', 'Hey Cammy, you really do love plants haha! I think you are going in the right direction, clean up the sketch in black and white first before you add colour.', 'feedback'),
        ('4', '3', 'Hey Hanhan, I know you hate being stuck inside during lockdown so it is great to see you taking inspiration from your home working space. I think a solid background would tie the elements together.', 'feedback');

    CREATE TABLE user_watch
    (
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE
    );

    INSERT INTO user_watch
        (user_id, project_id)
    VALUES
        ('1', '2'),
        ('1', '3'),
        ('2', '1'),
        ('2', '3'),
        ('2', '4'),
        ('3', '1'),
        ('4', '1');

END;