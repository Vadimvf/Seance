class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :username, null: false, unique: true
      t.string :fullname, null: false
      t.string :email, null: false, unique: true
      t.text   :bio
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end

    add_index :authors, :username
    add_index :authors, :session_token
  end
end
