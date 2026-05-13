import { screenshot } from '../../lib/page.js'
import {
  investmentTrustStartBuyingTableLocator as locator,
  investmentTrustStartBuyingUrl as url
} from '../../../config.js'

export default async function handleInvestmentTruseStartBuying({ message }) {
  const chatId = message.chat.id
  const onLoad = await this.sendLoadingMsg(chatId)
  const screenshotBuffer = await screenshot(url, locator)
  if (!screenshotBuffer) {
    this.sendTimeoutError(chatId)
  } else {
    this.sendPhoto(chatId, screenshotBuffer)
  }
  onLoad()
}
