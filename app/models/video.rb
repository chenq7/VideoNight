# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  view_count  :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

  validates :title, :view_count, :author_id, presence: true

  validate :ensure_thumbnail
  validate :ensure_video

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes, 
    as: :likeable,
    dependent: :destroy

  has_one_attached :video
  has_one_attached :thumbnail

  def ensure_thumbnail
    if !self.thumbnail.attached?
      errors[:thumbnail] << "must be attached!"
    end
  end

  def ensure_video
    if !self.video.attached?
      errors[:video] << "must be attached!"
    end
  end

  def self.search_by_title(input_field)
    Video.where("title LIKE :search", search: "%#{input_field}%").to_a
  end

  def num_likes
    counts = self.likes.group(:is_liked).count
    counts[true] = 0 if !counts[true]
    counts[false] = 0 if !counts[false]
    counts
  end
end
