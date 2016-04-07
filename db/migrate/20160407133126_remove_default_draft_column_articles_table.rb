class RemoveDefaultDraftColumnArticlesTable < ActiveRecord::Migration
  def up
    change_column_default :articles, :published, nil
  end

  def down
    change_column_default :articles, :published, ""
  end
end
