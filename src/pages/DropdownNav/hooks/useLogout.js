import { useCallback } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session/index'

export default (setOpen) => {
  const wallet = useWallet()
  const { logout } = useBindDispatch(sessionActions)
  return useCallback(async () => {
    // await deleteStore()
    await wallet.disconnect()
    localStorage.removeItem('walletName')
    localStorage.removeItem('walletName2')

    logout()
    setOpen((prev) => !prev)
    document.getElementById('dropdown-menu-overlay').remove()
  }, [wallet])
}
