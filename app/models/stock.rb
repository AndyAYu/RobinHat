class Stock < ApplicationRecord

    validates :ticker, presence: true, uniqueness: true
    validates :amount, presence: true
    validates :unit_price, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

end