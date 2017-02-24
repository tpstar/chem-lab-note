class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  after_action :set_csrf_cookie_for_ng

  def angular_home
  end

  #to solve CSRF token authenticity issue: use after_filter :set_csrf_cookie_for_ng and private method verified_request
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

end
