# Brilo-sample
Preview on http://karel.profant.sweb.cz/
Project of personal website using BEM naming convention.
## Install guide
PHP on your server is required.
Just copy and paste to your domain.
If you want use your own database server, change /web/php/connecttodb.php to parameters of your database, create table in your database and put there data like this:

CREATE TABLE homepage_columns (
    id           INTEGER PRIMARY KEY
                         NOT NULL
                         UNIQUE,
    title        VARCHAR NOT NULL,
    text         VARCHAR NOT NULL,
    picture_name VARCHAR NOT NULL
);

INSERT INTO homepage_columns (
                                 id,
                                 title,
                                 text,
                                 picture_name
                             )
                             VALUES (
                                 1,
                                 'epic project',
                                 'Awesome project I did in 2018. It was experience for me',
                                 'homepage--block--epic-project.jpg'
                             );

INSERT INTO homepage_columns (
                                 id,
                                 title,
                                 text,
                                 picture_name
                             )
                             VALUES (
                                 2,
                                 'another work I did',
                                 'Awesome project I did in 2019. It was experience for me',
                                 'homepage--block--another-work.jpg'
                             );

INSERT INTO homepage_columns (
                                 id,
                                 title,
                                 text,
                                 picture_name
                             )
                             VALUES (
                                 3,
                                 'rebrand of this company',
                                 'Awesome project I did in 2020. It was experience for me',
                                 'homepage--block--rebrand-company.jpg'
                             );
