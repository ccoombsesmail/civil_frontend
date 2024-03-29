import {
  DefaultDIDAdapter, DIDBackend, DIDStore, JWTBuilder, JWTHeader,
} from '@elastosfoundation/did-js-sdk'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { STORE_PATH } from '../../DID/constants'

export default () => {
  const { currentUser } = useGetCurrentUser()

  return useCallback(async (doc) => {
    DIDBackend.initialize(new DefaultDIDAdapter('testnet'))
    const rootPath = STORE_PATH
    const store = await DIDStore.open(rootPath)

    const h = JWTBuilder.createHeader()
    h.setType(JWTHeader.JWT_TYPE)
      .setContentType('json')
    h.put('library', 'Elastos DID')
    h.put('version', '1.0')

    // const cal = dayjs()
    // const iat = cal.unix()
    // const nbf = cal.add(-1, 'month').unix()
    // const exp = cal.add(4, 'month').unix()

    const iat = Date.now()
    // const nbf = Date.now() - 2_000_000
    const exp = Date.now() + 2_000_000
    // console.log(nbf, exp)

    // create jwt claims
    const b = JWTBuilder.createClaims()
    b.setSubject(doc.subject.repr)
      .setId(doc.getDefaultPublicKey().publicKeyBase58)
      .setAudience('civil-backend')
      .setIssuedAt(iat)
      .setExpiration(exp)
      // .setNotBefore(nbf)
      .put('userId', doc.getSubject().repr)
      .put('username', currentUser?.username || doc.getSubject().getMethodSpecificId())
      .put('userCivilTag', currentUser?.tag)

    doc.getMetadata().attachStore(store)

    const token = await doc.jwtBuilder()
      .setHeader(h)
      .setClaims(b)
      .sign('pwd')

    if (token) {
      const parser = doc.jwtParserBuilder().build()
      parser.parse(token).then((t) => console.log(t))
    } else {
      console.log('create jwt token failed.')
    }
    return token
  }, [currentUser])
}
