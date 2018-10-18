class Tomb < ActiveRecord::Base
    mount_uploader :image_url, TombUploader
end
