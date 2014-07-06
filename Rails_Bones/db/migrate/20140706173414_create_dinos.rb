class CreateDinos < ActiveRecord::Migration
  def change
    create_table :dinos do |t|
      t.string :name
      t.string :species
      t.string :size

      t.timestamps
    end
  end
end
