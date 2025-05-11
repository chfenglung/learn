import { configure, defineRule } from 'vee-validate'

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})

defineRule('required', value => {
  return !value || !value.toString().trim().length ? '必填欄位' : true
})

defineRule('min', (value, [limit]) => {
  if (!value || !value.length) return true

  return value.length >= limit ? true : `至少輸入 ${limit} 個字`
})

defineRule('max', (value, [limit]) => {
  if (!value || !value.length) return true

  return value.length <= limit ? true : `最多輸入 ${limit} 個字`
})

defineRule('between', (value, [min, max]) => {
  if (!value || !value.length) return true

  const isValid = value.length >= min && value.length <= max
  return isValid ? true : `請輸入 ${min}-${max} 個字`
})

defineRule('email', value => {
  if (!value || !value.length) return true

  const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,})$/
  return regex.test(value) ? true : 'Email 格式不符'
})

defineRule('phone', value => {
  if (!value || !value.length) return true

  const regex = /^09[\d]{8}$/
  return regex.test(value) ? true : '請輸入 09 開頭之 10 位數字'
})
