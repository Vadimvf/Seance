json.extract! article, :id, :title, :read_time, :created_ago
json.author article.author, :fullname, :username

show ||= false

if show
  json.extract! article, :body
else
  json.extract! article, :body_short
end
