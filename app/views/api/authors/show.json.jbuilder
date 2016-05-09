json.extract! @author, :id, :fullname, :username, :email, :bio
json.articles do
  json.array! @author.articles, :id, :title, :read_time, :created_ago
end
