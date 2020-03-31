class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :video_id, null: false
    end
    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
