// 書籍系API返り値
type TopCategoryResponse = {
  id_top_category: string,
  name_category: string,
  sub_category_list: Object[]
}
type TopCategory = {
  id: string,
  name: string,
  subCategories: Object[]
}

export const fetchBookApi = async (): Promise<TopCategory[]> => {
  const endpoint = "https://dev-app-api.abceed.com/mock/book/all"
  const res = await fetch(endpoint)
  const { top_category_list: result } = await res.json()
  return result.map((category: TopCategoryResponse) => ({
    id: category['id_top_category'],
    name: category['name_category'],
    subCategories: category['sub_category_list']
  }))
}