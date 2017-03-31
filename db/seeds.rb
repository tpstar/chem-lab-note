# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Chemical.create(name: "sodium acetate", formula: "C2H3NaO2", fw: 82.03, density: 1.528, mp: 324.0, bp: 881.4, user_id: 1)
Chemical.create(name: "acetic acid", formula: "C2H4O2", fw: 60.05, density: 0.61, mp: 16.0, bp: 118.0, user_id: 1)
Chemical.create(name: "sodium hydroxide", formula: "NaOH", fw: 40, density: 1.23, mp: 318, bp: 1388, user_id: 1)
Chemical.create(name: "water", formula: "H2O", fw: 18.02, density: 1, mp: 0, bp: 100, user_id: 1)
Chemical.create(name: "thionyl chloride", formula: "SOCl2", fw: 118.97, density: 1.638, bp: 74.6, user_id: 1)
Chemical.create(name: "acetyl chloride", formula: " CH3COCl", fw: 78.50, density: 1.104, bp: 52, user_id: 1)
Chemical.create(name: "methylene chloride", formula: "CH2Cl2", fw: 84.93, density: 1.325, bp: 39.8, user_id: 1)
Chemical.create(name: "benzoic acid", formula: "C7H6O2", fw: 122.12, bp: 123, bp: 249, user_id: 1)
Chemical.create(name: "sodium benzoate", formula: "C6H5COONa", fw: 144.10, user_id: 1)
