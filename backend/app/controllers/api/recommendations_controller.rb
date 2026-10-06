class Api::RecommendationsController < ApplicationController
  # Recommendation algorithm: returns products related to the given product
  # Priority: same category > same brand, limit 4 results
  # Use case: "Recommended: compatible lenses for your camera" or "other Canon products"
  def index
    product_id = params[:product_id]

    if product_id.blank?
      return render json: { error: "product_id required" }, status: :bad_request
    end

    product = Product.find(product_id)

    # Recommendations: same category + same brand, exclude current product, limit to 4
    recommendations = Product
      .where(category_id: product.category_id)
      .or(Product.where(brand_id: product.brand_id))
      .where.not(id: product_id)
      .limit(4)

    render json: recommendations
  end
end
