// 書籍系APIの返り値を型定義しておく
// /mock/book/all
export type ApiResponse = TopCategoryResponse[]
// /mock/book/all > トップカテゴリー
export type TopCategoryResponse = {
  id_top_category: string,
  name_category: string,
  sub_category_list: SubCategoryResponse[]
}
// /mock/book/all > トップカテゴリー > サブカテゴリー
export type SubCategoryResponse = {
  id_category: string,
  name_category: string,
  book_list: BookResponse[]
}
// /mock/book/all > トップカテゴリー > サブカテゴリー > 書籍
export type BookResponse = {
  id_book: string,
  name_book: string,
  publisher: string,
  author: string,
  img_url: string,
  is_unlimited: number | boolean
}

// 書籍系APIのフェッチ
export const fetchBookApi = async (): Promise<TopCategoryResponse[]> => {
  const endpoint = "https://dev-app-api.abceed.com/mock/book/all"
  const res = await fetch(endpoint)
  const { top_category_list: results } = await res.json()
  return results
}