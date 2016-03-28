# Flux Stores

### AritcleStore

Holds all Articles.

##### Actions:
- `receiveAllAritcles`
- `receiveSingleArticle`
- `removeArticle`

##### Listeners:
- `AritclesIndex`
- `ArticleDetail`

### CommentStore

Holds comment details

##### Actions:

- `receiveAllComments`
- `receiveSingleComment`
- `removeComment`

##### Listeners:
- `CommentList`
- `CommentDetail`

### Publications

- Holds all Articles.

##### Actions:
- `receiveAllPublications`
- `receiveSinglePublication`
- `removePublication`

##### Listeners:
- `PublicationsIndex`
- `PublicationDetail`

### SearchStore
Holds suggestions for search.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `Search`
