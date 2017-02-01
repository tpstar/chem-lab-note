require 'test_helper'

class ChemicalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chemicals_index_url
    assert_response :success
  end

end
