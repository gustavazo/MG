import '../styles/global.css'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}