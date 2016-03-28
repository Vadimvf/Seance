# Seance

[Heroku link][heroku] **NB:** Coming Tue., March 29th

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Seance is a web blogger inspired by Medium and built on Ruby on Rails and React.js. Seance allows users to focus on and create written content. The app's interface allows for writing and editing articles in a manner where the edit/creation form mirrors it's printed output.

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete articles
- [ ] Apply styling to articles while editing
- [ ] Create, read and delete comments on authors articles
- [ ] Search for stories and authors

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

### Phase 2: Articles Model, API, and basic APIUtil (1.5 days)

**Objective:** Articles can be created, read, edited and destroyed through the API by W1D3.

- [ ] create `Article` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for articles (`ArticlesController`)
- [ ] jBuilder views for articles
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

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good by W1D5

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook by W2D1

- [ ] create `Notebook` model
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding articles requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable W2D3

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notebook
  - [ ] adding tags to notebook
  - [ ] creating tags while adding to notebooks
  - [ ] searching notebooks by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Articles (0.5 days)

**objective:** Enable complex styling of articles.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Highlight articles for blocks of text
- [ ] Pagination / infinite scroll for Articles Index
- [ ] Allow users to follow users and bookmark articles
- [ ] AutoSave 
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
