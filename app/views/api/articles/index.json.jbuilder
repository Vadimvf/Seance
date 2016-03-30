json.array! @articles do |article|
  json.title   article.title
  json.readTime article.read_time
  json.author   article.author.fullname
  json.created  article.created_ago
end
