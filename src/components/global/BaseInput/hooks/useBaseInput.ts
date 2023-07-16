import { useState } from 'react'
import { ReactComponent as Eye } from '@/assets/icons/eye.svg'
import { ReactComponent as EyeOff } from '@/assets/icons/eyeOff.svg'
const useBaseInput = () => {
  const [type, setType] = useState('password')

  const handleToggle = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }
  return { handleToggle, type, Eye, EyeOff }
}

export default useBaseInput
