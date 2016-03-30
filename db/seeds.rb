##ALREADY SEEDED
# Authors = 10.times do
#   Author.create(
#     username: Faker::Internet.user_name,
#     password: "password",
#     fullname: Faker::Book.author,
#     email: Faker::Internet.safe_email,
#     bio:  "#{Faker::Name.title} from #{Faker::University.name}"
#   )
# end

# (1..50).each do
#   literary_article = ""
#   (1..10).each { literary_article.concat(Faker::Hipster.paragraph) }
#   literary_article.concat("\n")
#   (1..10).each { literary_article.concat(Faker::Hipster.paragraph) }
#
#   tech_article = ""
#   (1..10).each { tech_article.concat(Faker::Hacker.say_something_smart) }
#   tech_article.concat("\n")
#   (1..10).each { tech_article.concat(Faker::Hacker.say_something_smart) }
#
#
#   Article.create(
#     title: Faker::Book.title,
#     body: literary_article,
#     author_id: rand(1..100)
#   )
#
#   Article.create(
#     title: "#{ Faker::Hacker.noun } #{Faker::Hacker.ingverb}".titleize,
#     body: tech_article,
#     author_id: rand(1..100)
#   )
# end
