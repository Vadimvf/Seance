# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users (Authors)

- `POST /users`
- `PATCH /users`
- `DELETE /users`

### Session

- `POST /session`
- `DELETE /session`

## JSON API

### Articles

- `GET /api/articles`
  - Notes index/search
- `POST /api/articles`

- `GET /api/articles/:id`
- `PATCH /api/articles/:id`
- `DELETE /api/articles/:id`

- `GET /api/articles/:id/comments`
  - Index of all comments for an article

### Publications

- `GET /api/publications`
  - Publications search
- `POST /api/publications`

- `GET /api/publications/:id`
- `POST /api/publications/:id`
- `PATCH /api/publications/:id`
- `DELETE /api/publications/:id`

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`

### Tags

- An articles's tags will be included in the article show template
- `GET /api/tags`
- `POST /api/notes/:note_id/tags`: add tag to article by name
  - if note doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by name

### Followers
