class CreateDraftColumnArticlesTable < ActiveRecord::Migration
  def change
    add_column :articles, :published, :boolean, default: true, null: false
  end
end
