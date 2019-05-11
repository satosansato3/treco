class AddDateToMicroposts < ActiveRecord::Migration[5.2]
  def change
    add_column :microposts, :date, :date
  end
end
