class Article < ActiveRecord::Base
  include PgSearch
  validates :title, :body, :author_id, :body_short, presence: true
  validates :body, uniqueness: true
  before_validation :create_body_short, :ensure_title

  multisearchable against: [:title],
                  if: Proc.new { |article| article.published },
                  using: { tsearch: {:prefix => true} }
                  
  is_impressionable

  belongs_to :author

  def read_time
    "#{( body.split.count / 180 )} minute read"
  end

  def created_ago
    time_difference = Time.now.to_i - self.created_at.to_i
    pretty_time(time_difference)
  end

  def find_with_impressions
    Article.joins(:impressions).group("articles.id").order("count(impressions.id) DESC")
  end

  private

  def ensure_title
    self.title = "Untitled" if self.title == ""
  end

  def create_body_short
    self.body_short = self.body.split[0..40].join(" ");
  end

  def pretty_time(time_difference)

    case time_difference
      when 0..119
        then 'about a minute ago'
      when 120..3540
        then ((time_difference)/60).to_i.to_s+' minutes ago'
      when 3541..7100
        then 'about an hour ago'
      when 7101..82800
        then (((time_difference)+99)/3600).to_i.to_s+' hours ago'
      when 82801..172000
        then 'a day ago'
      when 172001..518400
        then (((time_difference)+800)/(60*60*24)).to_i.to_s+' days ago'
      when 518400..1036800
        then 'a week ago'
      else
        (((time_difference)+180000)/(60*60*24*7)).to_i.to_s+' weeks ago'
    end

  end

end
