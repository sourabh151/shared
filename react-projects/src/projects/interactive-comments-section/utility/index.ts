import type {Comment , Reply} from "../index.d.ts"

export function isComment(message:(Comment | Reply)) : message is Comment {
  return "replies" in message;
}
