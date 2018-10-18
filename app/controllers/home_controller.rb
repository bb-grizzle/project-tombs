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
        changeNullValue(params["q02"], "q02-01" ),
        changeNullValue(params["q03"], "q03-04" ),
        changeNullValue(params["q04"], "q04-01" ),
        changeNullValue(params["q05"], "q05-04" ),
        changeNullValue(params["q06"], "q06-03" ),
        changeNullValue(params["q07"], "q07-02" )
      ]
    @user_comment = changeNullValue(params["q08"], "더할나위 없었다.")
    @user_content = changeNullValue(params["content"], "잘먹고 잘 살다가 간다.")
    @base_color = setMainColor(@user_life_list[0])
  end
  
  def share
    @tombs = Tomb.all.reverse_order
  end
  
  def new
    tomb = Tomb.new
    tomb.name = params[:name]
    tomb.content = params[:content]
    
    case params[:emotion]
      when "thanks" then tomb.emotion = "svg/c-1.svg"
      when "forgive" then tomb.emotion = "svg/c-2.svg"
      when "regret" then tomb.emotion = "svg/c-3.svg"
      when "worry" then tomb.emotion = "svg/c-4.svg"
    end
    
    if "#{params[:image]}" != "" 
      tomb.image_url = params[:image]
    end
    
    tomb.save
    
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
  
  def setMainColor (season) 
    case season
      when "q02-01" then base_color = "#FF8B97"
      when "q02-02" then base_color = "#6EB134"
      when "q02-03" then base_color = "#F4A200"
      when "q02-04" then base_color = "#8CA2DE"
    end
    return base_color
  end
end
