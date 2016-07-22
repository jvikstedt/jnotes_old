class Note < ApplicationRecord
  validates :title, presence: true

  def self.search(search)
    if search.blank?
      all
    else
      where("title LIKE ? OR body LIKE ?", "%#{search}%", "%#{search}%")
    end
  end
end
