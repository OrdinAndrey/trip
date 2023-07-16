import Cookies from 'js-cookie'
// Функция для установки cookie на несколько дней

export const setCookieDays = (name: string, value: object, days: number) => {
  const jsonValues: string = JSON.stringify(value)
  Cookies.set(name, jsonValues, { expires: days })
}

type CookiesType = {
  email: string
  password: string
}
// Функция для установки cookie на 10 минут

export const setCookieMinutes = (value: CookiesType) => {
  const text = `${value.email}`
  const name = 'user'
  Cookies.set(name, text, { expires: 1 / 144 })
}

// Функция для получения значения cookie
const getCookie = (name: string) => {
  return Cookies.get(name)
}

// Функция проверки cookie на введённые пользователем данные
export const checkCookies = (value: CookiesType) => {
  const dataCookies = getCookie(value.email)
  if (dataCookies) {
    const cookiesObject = JSON.parse(dataCookies)
    return value.password === cookiesObject.password
  } else {
    return false
  }
}
// Функция проверки cookie на 10 минут
export const checkLoginCookies = () => {
  const email = getCookie(`user`)
  if (email) {
    const data = JSON.parse(getCookie(email) || '')
    return { email: data.email, password: data.password }
  }
}