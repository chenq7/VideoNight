class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description
      t.integer :view_count, null: false
      t.integer :author_id, null: false 

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :author_id
    add_index :videos, [:title, :author_id], unique: true
  end
end
