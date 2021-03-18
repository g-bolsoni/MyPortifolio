import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="pt-br">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" 
                        content="Portifólio, este é o meu portifólio, desenvolvido por mim  "/>
                    
                    <title>My new Blog</title>
                    
                    {/* Bootstrap CSS */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    {/* Fontes   */}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>

                    {/*Js do Bootstrap*/}
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
                </body>
            </Html>
        )
    }
}