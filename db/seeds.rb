##ALREADY SEEDED
AUTHORS = [];
100.times do
  author = Author.create(
    username: Faker::Internet.user_name,
    password: "password",
    fullname: Faker::Book.author,
    email: Faker::Internet.safe_email,
    bio:  "#{Faker::Name.title} from #{Faker::University.name}"
  )

  AUTHORS << author
end

50.times do
  literary_article = ""
  rand(1..3).times do
    literary_article.concat("\n") unless literary_article == ""
    (1..10).each { literary_article.concat(Faker::Hipster.paragraph) }
    literary_article.concat("\n")
    (1..10).each { literary_article.concat(Faker::Hipster.paragraph) }
  end

  tech_article = ""
  rand(1..4).times do
    tech_article.concat("\n") unless tech_article == ""
    (1..10).each { tech_article.concat("#{Faker::Hacker.say_something_smart} ") }
    tech_article.concat("\n")
    (1..10).each { tech_article.concat("#{Faker::Hacker.say_something_smart} ") }

  end

  num_authors = AUTHORS.length
  author_id = AUTHORS[rand(0...num_authors)].id

  Article.create(
    title: Faker::Book.title,
    body: literary_article,
    author_id: author_id,
    body_short: literary_article.split[0..40].join(" ")
  )

  author_id = AUTHORS[rand(0...num_authors)].id

  Article.create(
    title: "#{ Faker::Hacker.noun } #{Faker::Hacker.ingverb}".titleize,
    body: tech_article,
    author_id: author_id,
    body_short: tech_article.split[0..40].join(" ")
  )
end
