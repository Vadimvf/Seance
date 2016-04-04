class Author < ActiveRecord::Base
  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :fullname, :password_digest, :session_token,
    presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { in: 6..20, allow_nil: true }
  validates :username, length: { in: 3..20 }
  validates :email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }

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
