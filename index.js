import bot from './src/lib/bot.js'
import { handleStart } from './src/handlers/start.js'
import { handleChart } from './src/handlers/chart.js'
import { handleText } from './src/handlers/text.js'
import { handleCandlestick } from './src/handlers/candlestick.js'
import { handleStockNews } from './src/handlers/news.js'
import { handleAfterHours } from './src/handlers/afterHours.js'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { allowedChats } = require('./config.js')

const checkAllowed = (msg) => {
  if (!allowedChats || allowedChats.length === 0) return true
  return allowedChats.includes(msg.chat.id)
}

const routeConfig = {
  '^/start$': handleStart,
  '^/chart': handleChart,
  '^/text': handleText,
  '^/[K|k]': handleCandlestick,
  '^/news(?: (.*))?$': handleStockNews,
  '^/after_hours(?: (.*))?$': handleAfterHours
}

bot.route(routeConfig)
