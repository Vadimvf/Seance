class RemoveDefault < ActiveRecord::Migration
  def up
    change_column_default :articles, :body_short, nil
  end

  def down
    change_column_default :articles, :body_short, ""
  end
end
