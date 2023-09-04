// 書籍系APIの返り値を型定義しておく
// /mock/book/all
export type TopCategoryResponse = {
  id_top_category: string,
  name_category: string,
  sub_category_list: Array<SubCategoryResponse>
}
// /mock/book/all > サブカテゴリー
export type SubCategoryResponse = {
  id_category: string,
  name_category: string,
  book_list: Array<BookResponse>
}
// /mock/book/all > サブカテゴリー > 書籍
export type BookResponse = {
  id_book: string,
  name_book: string,
  publisher: string,
  author: string,
  img_url: string
}

// 書籍系APIのフェッチの返り値
export type TopCategory = {
  id: string,
  name: string,
  subCategories: Array<SubCategoryResponse>
}
// 書籍系APIのフェッチ
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