class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :body, null: false, unique: true
      t.integer :author_id, null: false
      t.integer :publication_id

      t.timestamps
    end

    add_index :articles, :author_id
    add_index :articles, :publication_id
  end
end
