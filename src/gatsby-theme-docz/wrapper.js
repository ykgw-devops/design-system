import React from 'react'
import { Global, css } from '@emotion/core'

export default ({ children }) => (
  <>
    <Global css={css`
      @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600&display=swap&subset=latin-ext');
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css');

      html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: 'Fira Sans', system-ui, sans-serif !important;
        font-size: 14px !important;
        line-height: 1.5em !important;
      }

      button, input, optgroup, select, textarea {
        line-height: 1em;
      }
    `}
    />
    {children}
  </>
)
