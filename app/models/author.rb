class Author < ActiveRecord::Base
  include PgSearch
  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :fullname, :password_digest, :session_token,
    presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { in: 6..20, allow_nil: true }
  validates :username, length: { in: 3..20 }
  validates :bio, length: { maximum: 150 }
  validates :email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }

  multisearchable against: [:username, :fullname]

  has_many :articles

  def self.find_by_credentials(identifier, password)
    if /@/.match(identifier)
      author = Author.find_by_email(identifier)
    else
      author = Author.find_by_username(identifier)
    end
    return nil unless author

    author.is_password?(password)? author : nil
  end

  def self.find_with_published_articles(author_id)
    author = Author.includes(:articles)
    .where(articles: { published: true }, id: author_id).first

    author ? author : Author.find(author_id)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_sesssion_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
