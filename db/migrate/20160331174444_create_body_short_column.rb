class CreateBodyShortColumn < ActiveRecord::Migration
  def change
    add_column :articles, :body_short, :string, default: "", null: false
  end

end
