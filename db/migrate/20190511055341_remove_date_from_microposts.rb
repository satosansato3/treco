class RemoveDateFromMicroposts < ActiveRecord::Migration[5.2]
  def change
    remove_column :microposts, :year, :integer
    remove_column :microposts, :month, :integer
    remove_column :microposts, :day, :integer
  end
end
