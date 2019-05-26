export enum TweetActionType {
  POST = 'POST'
}

export interface Content {
  id: number
  text: string
}

export interface TweetAction {
  content: Content
  type: TweetActionType
}

export const post = (content: Content): TweetAction => ({
  content,
  type: TweetActionType.POST
})
