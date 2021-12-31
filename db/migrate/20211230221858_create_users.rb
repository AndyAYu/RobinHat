class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
