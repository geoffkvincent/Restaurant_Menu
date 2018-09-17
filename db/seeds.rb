20.times do
  Menu.create(
    name: Faker::Commerce.menu_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
  )
end
