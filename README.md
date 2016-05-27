bran# Seance

[Heroku link][heroku] **NB:** Current Work in Progress, new Features ongoing

[heroku]: http://www.seance.press

## Description

Seance is a web blogger inspired by Medium and built on Ruby on Rails and React.js. Seance allows users to focus on and create written content. The app's interface allows for writing and editing articles in a manner where the edit/creation form mirrors it's printed output.

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication by W1D2

- [ ] create new project
- [ ] create `User` model
- [ ] implement user authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Articles Model, API, and basic APIUtil (2.0 days)

**Objective:** Articles can be created, read, edited and destroyed through the API by W1D3.

- [ ] create `Article` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for articles (`ArticlesController`), for users
- [ ] jBuilder views for articles, users
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Articles can be created, read, edited and destroyed with the user interface by W1D5

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each article component, building out the flux loop as needed.
  - [ ] `ArticlesIndex`
  - [ ] `ArticleForm`

### Phase 4: Notebooks (1 day)

  **Objective:** Articles belong to Publications by W2D1

  - [ ] create `Publication` model
  - build out API, Flux loop, and components for:
  - [ ] Publication CRUD
  - [ ] adding articles can allow for a publication
  - [ ] viewing articles by publication

  Phase 3 adds further organization to the articles. Articles belong to a Publication, which has its own `Index` view.

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good by W2D2

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- Use CSS to style new views


### Phase 6: Tags (1.5 days)

**Objective:** Articles can be tagged with multiple tags, and tags are searchable W2D3

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for Articles
  - [ ] adding tags to Articles
  - [ ] creating tags while adding to Articles
  - [ ] searching articles by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Articles (1.0 days)

**objective:** Enable complex styling of articles.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and designed.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Highlight articles for blocks of text
- [ ] Pagination / infinite scroll for Articles Index
- [ ] Allow users to follow users and bookmark articles
- [ ] AutoSave when creating/editing articles
- [ ] Login through FB, Google

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
