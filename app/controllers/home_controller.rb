class HomeController < ApplicationController
  def about
  end
  
  def design
  end
  
  def result
    @user_name = params["q01-01"] 
    @user_birth = params["q01-02"]
    @start_year = @user_birth.split("-")[0]
    @user_age = Time.now.to_s.split("-")[0].to_i - @start_year.to_i + 1
    @user_wish_age = params["q01-03"]
    @user_life = ((@user_age.to_f / @user_wish_age.to_f) * 100).to_i
    @user_life_list = [
        params["q02"],
        params["q03"],
        params["q04"],
        params["q05"],
        params["q06"],
        params["q07"]
      ]
    @user_comment = params["q08"]
  end
  
  def share
  end
end
