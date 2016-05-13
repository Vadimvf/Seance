json.array! @search_results do |search_result|
  json.id search_result.searchable_id
  json.type search_result.searchable_type
  json.content search_result.content
end
