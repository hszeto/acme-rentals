class Api::ProductsController < ApplicationController
  def index
    products = Product.all

    # Search by name
    products = products.where("name ILIKE ?", "%#{filter_params[:q]}%") if filter_params[:q].present?

    # Filter by category
    products = products.where(category_id: filter_params[:category_id]) if filter_params[:category_id].present?

    # Filter by brand
    products = products.where(brand_id: filter_params[:brand_id]) if filter_params[:brand_id].present?

    # Filter by price range
    if filter_params[:min_price].present?
      products = products.where("price >= ?", filter_params[:min_price])
    end
    if filter_params[:max_price].present?
      products = products.where("price <= ?", filter_params[:max_price])
    end

    # Sorting
    sort_param = params[:sort] || "created_at"
    if sort_param.start_with?('-')
      column = sort_param[1..]  # Remove the '-'
      products = products.order(column => :desc)
    else
      products = products.order(sort_param => :asc)
    end

    # Pagination (6 per page)
    limit = (params[:limit] || 6).to_i
    page = (filter_params[:page] || 1).to_i
    products = products.limit(limit).offset((page - 1) * limit)

    render json: products, include: [:category, :brand]
  end

  def show
    product = Product.find(params[:id])
    render json: product, include: [:category, :brand]
  end

  private

  def filter_params
    params.permit(:q, :category_id, :brand_id, :min_price, :max_price, :sort, :page, :limit)
  end
end
