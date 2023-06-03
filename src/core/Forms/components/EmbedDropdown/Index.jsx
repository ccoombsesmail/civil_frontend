/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react'

import ReactDOMClient from 'react-dom/client'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import { Dialog } from 'primereact/dialog'

import { InputText } from 'primereact/inputtext'
import { Provider } from 'react-redux'
import configureStore from '../../../../redux/store.ts'
import { EmbededTweet } from '../../../CommonComponents/EmbededTweet/EmbededTweet'
import LinkMetaData from '../LinkMetaData/Index'
import { useMemo } from 'react'

const YouTubeConfig = {
  contentName: 'Youtube Video',
  exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  parseUrl: (url, setLinkMetadata) => {
    const match = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url)

    const id = match ? (match?.[2].length === 11 ? match[2] : null) : null

    if (id != null) {
      setLinkMetadata({
        embedId: id,
        url,
      })
      return {
        id,
        url,
      }
    }

    return null
  },
  insertNode: (result) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${result.id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video"
    />,
  ),
}

const TwitterEmbedConfig = {
  contentName: 'Tweet',
  exampleUrl: 'https://twitter.com/jack/status/20',
  parseUrl: (text, setLinkMetadata) => {
    const match = /^https:\/\/twitter\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)$/.exec(text)

    if (match != null) {
      setLinkMetadata({
        embedId: match[4],
        url: match[0],
      })
      return {
        id: match[4],
        url: match[0],
      }
    }

    return null
  },

  insertNode: (result) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <EmbededTweet
      className={{
        base: '',
        focus: '',
      }}
      loadingComponent="Loading..."
      nodeKey="tweet-space"
      tweetID={result.id}
      format=""
    />,
  ),

}

const ExternalLinkConfig = {
  contentName: 'External Link',
  exampleUrl: 'https://lexical.dev/docs/concepts/read-only',

  insertNode: (result, setLinkMetadata) => ReactDOMClient.createRoot(document.getElementById('insert-embed-node')).render(
    <Provider store={configureStore}>

      <LinkMetaData
        externalContentUrl={result.url}
        url={result.url}
        setLinkMetadata={setLinkMetadata}
      />
    </Provider>
    ,
  ),

  parseUrl: (text) => {
    const match = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.exec(text)

    if (match != null) {
      return {
        id: null,
        url: match[0],
      }
    }

    return null
  },
}

function EmbedDropdown({ setLinkMetadata }) {
  const [urlValue, setUrlValue] = useState('')
  const [visible, setVisible] = useState(false)
  const [config, setConfig] = useState(null)
  const popupBtnRef = useRef(null)

  const items = [
    {
      label: 'YouTube Video',
      icon: 'pi pi-youtube',
      command: () => {
        setVisible(true)
        setConfig(YouTubeConfig)
      },
    },
    {
      label: 'Tweet',
      icon: 'pi pi-twitter',
      command: () => {
        setVisible(true)
        setConfig(TwitterEmbedConfig)
      },
    },
    {
      label: 'External Link',
      icon: 'pi pi-link',
      command: () => {
        setVisible(true)
        setConfig(ExternalLinkConfig)
      },
    },
  ]

  const urlIsValid = useMemo(() => config?.parseUrl(urlValue, setLinkMetadata) || urlValue.length === 0, [urlValue, setLinkMetadata])
  return (

    <div id="popup_container" className="relative flex justify-content-center w-5">
      <Dialog header={`Enter ${config?.contentName} Link`} visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <div className="flex-auto mt-5 mb-5">
          <InputText
            className={`w-full ${urlIsValid ? '' : 'p-invalid'}`}
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder={config?.exampleUrl}
            aria-describedby="link-input-help"
          />
          {
            !urlIsValid ? (
              <small id="link-input-help" className="text-red-500">
                Please enter a valid
                {' '}
                {config?.contentName}
                {' '}
                link
              </small>
            ) : null
}
        </div>
        <div className="w-full flex justify-content-end">
          <Button
            label="Insert"
            type="button"
            className="mt-2"
            onClick={() => {
              setVisible(false)
              config?.insertNode(config?.parseUrl(urlValue, setLinkMetadata), setLinkMetadata)
              setUrlValue('')
            }}
          />
        </div>
      </Dialog>
      <Menu
        baseZIndex={9999999999}
        model={items}
        popup
        ref={popupBtnRef}
        id="popup_menu_embed"
        className="w-full"
        appendTo="self"
        style={{
          display: 'none',
        }}
        onShow={() => {
          setTimeout(() => {
            const el = document.getElementById('popup_menu_embed')
            const btn = document.getElementById('show-embed-menu-btn')
            el.style.left = 0
            el.style.top = `${btn.offsetHeight + 5}px`
            el.style.display = 'block'
          }, 100)
        }}
      />
      <Button
        id="show-embed-menu-btn"
        type="button"
        label="Insert Link Or Embed (YouTube, Twitter, etc...)"
        icon="pi pi-align-left"
        className="mr-2 w-full"
        onClick={(event) => popupBtnRef.current.toggle(event)}
        aria-controls="popup_menu_embed"
        aria-haspopup
        style={{
          background: '#f8f9fa',
          color: 'black',
          border: '1px solid #dee2e6',
        }}
      />
    </div>
  )
}

export default EmbedDropdown
