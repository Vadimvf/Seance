json.extract! article, :title, :read_time, :created_ago
json.author article.author, :fullname, :username 

show ||= false

if show
  json.extract! article, :body
end