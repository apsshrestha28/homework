# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.delete_all
User.delete_all
Comment.delete_all

PASSWORD='sentence2'

super_user=User.create(
    first_name: 'Aleena',
    last_name: 'Bhari',
    email:"abc5@gmail.com",
    password: PASSWORD,
    is_admin: true
)
10.times do 
first_name=Faker::Name.first_name
last_name=Faker::Name.last_name
User.create(
    first_name:first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
)
end
users=User.all


50.times do
  created_at = Faker::Date.backward(days: 365)

  Post.create(
    title: Faker::Food.dish,
    body: Faker::Food.description,
    created_at:created_at,
    updated_at:created_at,
    user: users.sample
  )
end

posts=Post.all

posts.each do |p|
  5.times do
      Comment.create(
          body: Faker::Lorem.paragraph,
          post_id: p.id,
          user: users.sample 
      )
  end
end

comments= Comment.all


puts Cowsay.say("Generated #{posts.count} posts", :frogs)
puts Cowsay.say("Generated #{comments.count} comments", :bunny)
puts Cowsay.say("Created #{users.count} users", :dragon)
puts Cowsay.say("Login with #{super_user.email} and password: #{PASSWORD}", :sheep)