# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  is_liked      :boolean          not null
#  user_id       :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#

class Like < ApplicationRecord
  validates :user_id, :likeable_id, :likeable_type, presence: true
  validates :is_liked, inclusion: { in: [ true, false ] }
  validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }
  
  belongs_to :likeable, polymorphic: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
