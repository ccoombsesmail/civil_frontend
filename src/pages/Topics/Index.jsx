import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  DefaultDIDAdapter, DIDBackend, DIDStore, DIDDocument, JWTBuilder, JWTHeader, JWTParserBuilder, JWTParser,
} from '@elastosfoundation/did-js-sdk'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'

import TopicItem from './components/TopicItem/Index'
import Header from './components/Header/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { CardContainer, Container, BorderContainer } from './Style'

const createJWT = (doc) => {
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
    // .setNotBefore(nbf)
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

const Topics = () => {
  const { openModal, getAllTopics } = useBindDispatch(uiActionCreators, topicActionCreators)
  const topics = useSelector((s) => s.topics.list) || []
  const user = useSelector((s) => s.session.currentUser)
  useEffect(() => {
    getAllTopics()
  }, [])

  // const didAdapter = new DefaultDIDAdapter()
  // DIDBackend.initialize(didAdapter)

  useEffect(() => {
    const rpcEndpoint = 'testnet'
    const contractAddress = '0xF654c3cBBB60D7F4ac7cDA325d51E62f47ACD436'
    const adapter = new DefaultDIDAdapter(rpcEndpoint)
    DIDBackend.initialize(adapter)

    const rootPath = 'root/store'
    DIDStore.open(rootPath).then((store) => {
      const rootIdentity = store.loadRootIdentity('5f8a7b19fc0169d2a0215b119ace875c').then((identity) => {
        const did = identity.getDefaultDid()
        // console.log(did)
        const db = DIDDocument.Builder.newFromDID(did)
        createJWT(db.document)
        // console.log(db.document)
        // db.document.publish('pwd')
        // db.seal('pwd').then((doc) => doc.publish('pwd'))
      })
      // console.log(rootIdentity)

      store.close()
    })
  }, [])

  return (
    <>
      <Container>
        <BorderContainer>
          <Header user={user} openModal={openModal} />
          <CardContainer>
            {
            topics.map((topic) => <TopicItem key={topic.id} topic={topic} user={user} />)
            }
          </CardContainer>
        </BorderContainer>
        <WavyBackground color="#EF5D45" top="100%" />
      </Container>
    </>
  )
}

export default Topics
