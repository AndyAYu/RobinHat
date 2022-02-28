class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.balance = 10000
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show 
    @user = User.find_by(id: params[:id])
  end

  def update 
    @user = User.find_by(id: params[:id])
    amount = Integer(user_deposit_params['deposit_amount'])
    if amount + @user.balance < 0
      render json: 'Not enough to take out from'
    else
      @user.update(balance:  (amount + @user.balance))
      render json: {id: @user.id, username: @user.username, balance: @user.balance, owned_stocks: @user.owned_stocks}
    end
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def user_deposit_params
    params.require(:user).permit(:deposit_amount)
  end

end
