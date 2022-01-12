class Api::StocksController < ApplicationController

    def index 
        @user = User.find_by(id: params[:user_id])
    end

    def create
        @user = User.find_by(id: params[:user_id])
        @stock = Stock.new(stock_params)
        @stock.user_id = @user.id

        total_price = @stock.amount * @stock.unit_price

        if (total_price > @user.balance)
            render json: 'Balanace insufficient, please provide additional funds'
            return
        end

        if !@stock.save
            render json: @stock.errors.full_messages, status: 401
        else
            @user.balance -= total_price
            @user.save!
        end
    end


private
def stock_params
    params.require(:stock).permit(:ticker, :amount, :unit_price)
end
end