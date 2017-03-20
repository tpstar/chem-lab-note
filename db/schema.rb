# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170202035800) do

  create_table "chemical_reactions", force: :cascade do |t|
    t.integer  "chemical_id"
    t.integer  "reaction_id"
    t.float    "eq"
    t.float    "g"
    t.float    "mL"
    t.float    "mol"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "chemicals", force: :cascade do |t|
    t.string   "name"
    t.string   "formula"
    t.float    "fw"
    t.float    "density"
    t.float    "mp"
    t.float    "bp"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conditions", force: :cascade do |t|
    t.float    "time"
    t.integer  "temp"
    t.integer  "reaction_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "reactions", force: :cascade do |t|
    t.string   "title"
    t.date     "date"
    t.integer  "user_id"
    t.float    "solvent_vol"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "solvents", force: :cascade do |t|
    t.string   "name"
    t.integer  "bp"
    t.integer  "reaction_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "first_name"
    t.string   "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
