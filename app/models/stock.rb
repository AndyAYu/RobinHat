class Stock < ApplicationRecord

    validates: :ticker, presence: true, uniquenes: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

end