import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Meta Space';
        font-weight: 300;
        font-display: fallback;
        src: url('fonts/MetaSpace-Light.woff2') format('woff2'), url('fonts/MetaSpace-Light.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Meta Space';
        font-weight: 500;
        font-display: fallback;
        src: url('fonts/MetaSpace-Regular.woff2') format('woff2'), url('fonts/MetaSpace-Regular.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Meta Space';
        font-weight: 700;
        font-display: fallback;
        src: url('fonts/MetaSpace-Medium.woff2') format('woff2'), url('fonts/MetaSpace-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Meta Space';
        font-weight: 900;
        font-display: fallback;
        src: url('fonts/MetaSpace-Bold.woff2') format('woff2'), url('fonts/MetaSpace-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 300;
        font-display: fallback;
        src: url('fonts/Inter-Light.ttf') format('woff2'), url('fonts/MetaSpace-Light.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-display: fallback;
        src: url('fonts/Inter-Regular.ttf') format('woff2'), url('fonts/MetaSpace-Regular.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 700;
        font-display: fallback;
        src: url('fonts/Inter-Medium.ttf') format('woff2'), url('fonts/MetaSpace-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 900;
        font-display: fallback;
        src: url('fonts/Inter-Bold.ttf') format('woff2'), url('fonts/MetaSpace-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)

export default Fonts