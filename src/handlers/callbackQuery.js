import { afterHoursCallbackQueryHandlers } from './afterHours/index.js'

export function handleCallbackQuery(query) {
  const handlers = { ...afterHoursCallbackQueryHandlers }
  handlers[query.data].call(this, query)
  this.answerCallbackQuery(query.id)
}
