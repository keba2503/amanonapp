import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="icon" type="image/jpeg" href="/images/logo.png"></link>
                    <link rel="apple-touch-icon" href="/images/logo.png"></link>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;