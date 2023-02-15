class AddUnitPriceToStocks < ActiveRecord::Migration[6.1]
  def change
    add_column :stocks, :unit_price, :float
  end
end
