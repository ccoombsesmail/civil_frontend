import { useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import useSessionType from '../../core/hooks/permissions/useSessionType'

export default (containerId) => {
  const { disconnect } = useWallet()
  const {
    signedInViaCivic,
  } = useSessionType()

  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById(containerId)
      const disconnectListItem = container.getElementsByClassName('wallet-adapter-dropdown-list-item')[2]
      disconnectListItem?.remove()
      const list = container.getElementsByClassName('wallet-adapter-dropdown-list')[0]
      const li = document.createElement('li')
      li.addEventListener('click', () => {
        disconnect()
        localStorage.clear()
      })
      li.innerText = 'Disconnect'
      li.classList.add('wallet-adapter-dropdown-list-item')
      list.appendChild(li)
    }, 1000)
  }, [signedInViaCivic])
}
