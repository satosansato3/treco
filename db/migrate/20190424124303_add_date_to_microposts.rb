class AddDateToMicroposts < ActiveRecord::Migration[5.2]
  def change
    add_column :microposts, :year, :integer
    add_column :microposts, :month, :integer
    add_column :microposts, :day, :integer
  end
end
