class Author < ActiveRecord::Base
  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :fullname, :password_digest, :session_token,
    presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { in: 6..20, allow_nil: true}
  validates :email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }

  has_many :articles

  def find_by_credentials(identifier, password)
    if /@/.match(indentifier)
      user = user.find_by_email(identifier)
    else
      user = user.find_by_username(identifier)
    end
    return false unless user

    user.is_password?(password)? false : user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password(password)
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
