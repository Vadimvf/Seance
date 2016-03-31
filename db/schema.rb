# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160331174444) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",                       null: false
    t.text     "body",                        null: false
    t.integer  "author_id",                   null: false
    t.integer  "publication_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "body_short",     default: "", null: false
  end

  add_index "articles", ["author_id"], name: "index_articles_on_author_id", using: :btree
  add_index "articles", ["publication_id"], name: "index_articles_on_publication_id", using: :btree

  create_table "authors", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "fullname",        null: false
    t.string   "email",           null: false
    t.text     "bio"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "authors", ["session_token"], name: "index_authors_on_session_token", using: :btree
  add_index "authors", ["username"], name: "index_authors_on_username", using: :btree

end