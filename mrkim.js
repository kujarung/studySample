const ENV = process.env.NODE_ENV
let SERVICE = 'test'
if (ENV === 'production') SERVICE = location.hostname.split('.')[0] || 'test'
console.log(process.env.NODE_ENV)

const ERP = {
  development: '//dev.mrkim.co.kr/erp-service/api',
  testing: '//test.mrkim.co.kr/erp-service/api',
  production: process.env.VUE_APP_API_ERP_PRODUCTION
}

const AUTH = {
  development: '//dev.mrkim.co.kr/auth-service/api',
  testing: '//test.mrkim.co.kr/auth-service/api',
  production: `//${SERVICE}.mrkim.co.kr/auth-service/api`
}

const RPA = {
  development: '//dev.mrkim.co.kr/rpa-service/api',
  testing: '//test.mrkim.co.kr/rpa-service/api',
  production: '//rpa-service.mrkim.co.kr/api'
}

const ROBO = {
  development: '//dev.mrkim.co.kr/robo-service/api',
  testing: '//test.mrkim.co.kr/robo-service/api',
  production: `//${SERVICE}.mrkim.co.kr/robo-service/api`,
}

const CONTENTS = {
  development: '//dev.mrkim.co.kr/contents-service',
  testing: '//test.mrkim.co.kr/contents-service',
  production: `//${SERVICE}.mrkim.co.kr/contents-service`,
}

const MESSAGING = {
  development: '//dev.mrkim.co.kr/messaging-service/api',
  testing: '//test.mrkim.co.kr/messaging-service/api',
  production: `//${SERVICE}.mrkim.co.kr/messaging-service`,
}

const CRM = {
  development: '//dev.mrkim.co.kr/service/api',
  testing: '//test.mrkim.co.kr/service/api',
  production: `//${SERVICE}.mrkim.co.kr/service/api`,
}

const PRESENTATION = {
  development: '//conference-test-0.peoplelife.co.kr:4001/api',
  testing: '//conference-test-0.peoplelife.co.kr:4001/api',
  production: '//conference-test-0.peoplelife.co.kr:4001/apis'
}

const BIGBLUEBUTTON = {
  development: '//conference-test-2.peoplelife.co.kr/bigbluebutton/api',
  testing: '//conference-test-2.peoplelife.co.kr/bigbluebutton/api',
  production: '//conference-test-2.peoplelife.co.kr/bigbluebutton/api'
}

const SSO = {
  development: 'http://localhost:20921',
  testing: 'http://localhost:20921',
  production: 'http://localhost:20921'
}

const CALLSOCKET = {
  development: 'wss://call-socket.fcworld.kr/ws',
  testing: 'wss://call-socket.fcworld.kr/ws',
  production: 'wss://call-socket.fcworld.kr/ws'
}

export const NODE_ENV = ENV
export const ENV_APP = ENV

export const ENV_ERP = ERP[ENV]
export const ENV_AUTH = AUTH[ENV]
export const ENV_RPA = RPA[ENV]
export const ENV_ROBO = ROBO[ENV]
export const ENV_CONTENTS = CONTENTS[ENV]
export const ENV_MESSAGING = MESSAGING[ENV]
export const ENV_CRM = CRM[ENV]
export const ENV_PRESENTATION = PRESENTATION[ENV]
export const ENV_BIGBLUEBUTTON = BIGBLUEBUTTON[ENV]
export const ENV_SSO = SSO[ENV]
export const ENV_CALLSOCKET = CALLSOCKET[ENV]
