import dayJs, { type ConfigType } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/zh-cn'

dayJs.extend(relativeTime as any)
dayJs.extend(utc as any)
dayJs.extend(timezone as any)
dayJs.locale('zh-cn')

export const getDayjs = (date?: ConfigType) => {
  return dayJs(date)
}
