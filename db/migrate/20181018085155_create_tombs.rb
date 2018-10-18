class CreateTombs < ActiveRecord::Migration
  def change
    create_table :tombs do |t|
      t.string :name
      t.string :content
      t.string :emotion
      t.string :image_url
      
      t.timestamps null: false
    end
  end
end
