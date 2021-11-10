import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => (
  <>
    <Head>
      <title>Página não encontrada!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl">Oops! Página não encontrada!</h1>
      <Image
        src="/404.svg"
        alt="404 Page Not Found"
        width={400}
        height={300}
      />
      <span className="text-gray400">
        Voltar Para{" "}
        <Link href="/#">
          <a className="underline font-bold hover:text-gray500">Inicio</a>
        </Link>
        ?
      </span>
    </div>
  </>
);

export default Custom404;
