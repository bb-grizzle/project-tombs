class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def about
  end
  
  def design
  end
  
  def result
    @user_name = changeNullValue(params["q01-01"], "이동근")
    @user_birth = changeNullValue(params["q01-02"], "1992-11-29")
    @start_year = @user_birth.split("-")[0]
    @user_age = Time.now.to_s.split("-")[0].to_i - @start_year.to_i + 1
    @user_wish_age = changeNullValue(params["q01-03"], 88)
    @user_life = ((@user_age.to_f / @user_wish_age.to_f) * 100).to_i
    @user_life_list = [
        changeNullValue(params["q02"], "q03-04" ),
        changeNullValue(params["q03"], "q03-04" ),
        changeNullValue(params["q04"], "q03-04" ),
        changeNullValue(params["q05"], "q03-04" ),
        changeNullValue(params["q06"], "q03-04" ),
        changeNullValue(params["q07"], "q03-04" )
      ]
    @user_comment = changeNullValue(params["q08"], "더할나위 없었다.")
    @user_content = changeNullValue(params["content"], "잘먹고 잘 살다가 간다.")
  end
  
  def share
  end
  
  def new
    
    respond_to do |format|
        format.html { redirect_to :back }
        format.json { render json: "dd" }
    end
  end
  
  def changeNullValue (content, changeContent) 
    current_content = content
    current_content = content.nil? ? changeContent : content
    return current_content
  end
end
