class CreateProducts < ActiveRecord::Migration[8.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.references :category, null: false, foreign_key: true
      t.references :brand, null: false, foreign_key: true
      t.string :image_url
      t.integer :stock_quantity
      t.float :rating
      t.integer :review_count
      t.text :specs
      t.string :availability_status

      t.timestamps
    end

    add_index :products, :name
  end
end
