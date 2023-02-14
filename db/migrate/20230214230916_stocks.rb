class Stocks < ActiveRecord::Migration[6.1]
  def change
   create_table :stocks do |t|
     t.integer :user_id, null: false
     t.string :ticker, null: false
     t.float :amount, null: false
    
     t.timestamps
   end
   add_reference :users, :stocks, index:true, foreign_key: true
   add_index :stocks, :user_id
   add_index :stocks, :ticker
 end
end
