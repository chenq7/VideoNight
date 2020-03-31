# == Schema Information
#
# Table name: comments
#
#  id       :bigint           not null, primary key
#  body     :text             not null
#  user_id  :integer          not null
#  video_id :integer          not null
#


class Comment < ApplicationRecord
  validates :user_id, :video_id, :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  def num_likes
    counts = self.likes.group(:is_liked).count
    counts[true] = 0 if !counts[true]
    counts[false] = 0 if !counts[false]
    counts
  end

end
