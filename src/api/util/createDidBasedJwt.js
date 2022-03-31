import {
  DefaultDIDAdapter, DIDBackend, DIDStore, DIDDocument, JWTBuilder, JWTHeader, JWTParserBuilder, JWTParser
} from '@elastosfoundation/did-js-sdk'

export const createDIDBasedJWT = (doc) => {
  // create jwt header
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
  const nbf = Date.now() - 2_000_000
  const exp = Date.now() + 2_000_000

  // create jwt claims
  const b = JWTBuilder.createClaims()
  b.setSubject('JwtTest')
    .setId('0')
    .setAudience('Test cases')
    .setIssuedAt(iat)
    .setExpiration(exp)
    .setNotBefore(nbf)
    .put('foo', 'bar')

  // get jwt token
  const token = doc.jwtBuilder()
    .setHeader(h)
    .setClaims(b)
    .compact()
  
  if (token) {
    console.log('create jwt token successfully.')
    const parser = new JWTParserBuilder().build()
    parser.parse(token).then((t) => console.log(t))
  } else {
    console.log('create jwt token failed.')
  }
}
