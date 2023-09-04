// 画面表示に必要な書籍詳細プロパティ
export type BookDetails = {
  id: string,
  title: string,
  author: string,
  publisher: string,
  imgUrl: string,
  isUnlimited: boolean
}

export type BookCard = {
  id: string,
  imgUrl: string
}