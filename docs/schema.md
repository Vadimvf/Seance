# Schema Information

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null, unique (no duplicate articles)
author_id   | integer   | not null, foreign key (references authors), indexed
publication_id | integer   | foreign key (references publications), indexed

##publishings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | foreign key (references authors), indexed
publication_id | integer | foreign key (references publications), indexed

## publications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |
email       | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references authors), indexed
article_id     | string    | not null, foreign key (references articles), indexed
body        | text    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | integer   | not null, foreign key (references tags), indexed
article_id  | integer   | not null, foreign key (references articles), indexed, unique [tag_id]


## authors
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fullname        | string    | not null
username        | string    | not null, indexed, unique
email           | string    | not null, unique
bio             | text      |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

##bookmarks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references authors), indexed
article_id        | integer   | not null, foreign key (references articles), indexed

##pictures
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
description     | string    | not null, indexed, unique
link            | string    | not null, unique
imageable_id    | string    | integer, not null, foreign key
imageable_type  | string    | integer, not null

##follows (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | string    | not null, unique
followable_id   | string    | not null, foreign key (references authors), indexed
followable_type | string    | not null

##highlights (bonus)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
description     | string    | not null, indexed, unique
email           | string    | not null, unique
article_id      | integer   | not null, foreign key (references articles), indexed
author_id       | integer   | not null, foreign key (references articles), indexed
start_pos       | integer   | not null
end_pos         | integer   | not null
