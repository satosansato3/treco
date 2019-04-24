class RemoveDateFromMicroposts < ActiveRecord::Migration[5.2]
  def change
    remove_column :microposts, :date
  end
end
