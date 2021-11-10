import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => (
  <>
    <Head>
      <title>Em breve!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-3xl tracking-wider">Coming Soon!</h1>
      <h2 className="text-2xl text-gray500">
        Página em Desenvolvimento!
      </h2>
      <Image
        src="/bg-img/coding.svg"
        alt="Not created yet"
        width={400}
        height={300}
      />
      <span className="text-gray400">
        Voltar Para{" "}
        <Link href="/">
          <a className="underline font-bold hover:text-gray500">Inicio</a>
        </Link>
        ?
      </span>
    </div>
  </>
);

export default ComingSoon;
