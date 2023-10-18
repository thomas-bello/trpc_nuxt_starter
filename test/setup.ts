// console.log('in test setup.ts')

// import { defineBridge } from '../packages/utils/src'
// import moment from 'moment'
// const useMoment = () => {
//   return { moment: moment as any }
// }

// export default async () => {
//   console.log('run test setup 1')

//   defineBridge({
//     useMoment,
//   })

//   return async () => {
//     console.log('run test setup 2')
//   }
// }

import { beforeAll } from 'vitest'

beforeAll(() => {
  // console.log('run test setup beforeAll 1')
  // defineBridge({
  //   useMoment,
  //   useI18nHelper: () =>
  //     ({
  //       i18n: {
  //         value: {},
  //       },
  //       get: () => '',
  //     } as any),
  //   useWindow: () => ({}),
  // })
})
