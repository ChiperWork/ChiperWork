const text = (
  <>
    <b>Contrato de Licença para Usuário Final</b>
    <p>
      Este Contrato de Licença para Usuário Final ("CLUF") é um acordo legal entre você e Sirius Business
      Ltd. para o uso do aplicativo móvel ChiperWork. Ao instalar, acessar ou usar nosso
      aplicativo, você concorda em estar vinculado aos termos e condições deste CLUF. Se você não
      concordar com este CLUF, não poderá usar nosso Aplicativo.
    </p>

    <p>
      Você concorda em não usar o ChiperWork para Conteúdo ou Conduta Proibidos, que incluem, mas não estão limitados
      a:
    </p>
    <ul>
      <li>
        personificar, assediar ou intimidar outros, prejudicial a menores, incitar ou promover discurso de ódio,
        ilegal;
      </li>
      <li>
        conteúdo obsceno, sexualmente explícito, ofensivo, difamatório, calunioso, calunioso, violento e/ou
        conteúdo ilegal ou profano;
      </li>
      <li>
        conteúdo que infringe os direitos de terceiros, incluindo direitos autorais, marca registrada,
        privacidade, publicidade ou outros direitos pessoais ou de propriedade, ou que é enganoso ou
        fraudulento;
      </li>
      <li>
        conteúdo que promove o uso ou venda de substâncias ilegais ou regulamentadas, produtos de tabaco,
        munições e/ou armas de fogo; e
      </li>
      <li>conteúdo ilegal relacionado a jogos de azar.</li>
    </ul>
    <p>
      Qualquer violação deste CLUF, incluindo o Conteúdo e Conduta Proibidos delineados acima, pode
      resultar no término do seu acesso ao nosso aplicativo.
    </p>
    <p>
      Nosso aplicativo é fornecido "como está" e "conforme disponível", sem garantia de qualquer tipo, seja
      expressa ou implícita, incluindo, mas não se limitando a garantias implícitas de comercialização e
      adequação a uma finalidade específica. Não garantimos que nosso aplicativo será
      ininterrupto ou livre de erros. Em nenhum caso a Sirius Business Ltd. será responsável por quaisquer danos
      decorrentes ou relacionados ao uso ou incapacidade de uso do nosso
      aplicativo.
    </p>
    <p>
      Reservamo-nos o direito de modificar este CLUF a qualquer momento e sem aviso prévio. Sua continuação
      uso do aplicativo após a publicação de qualquer CLUF modificado indica sua aceitação dos termos
      do CLUF modificado.
    </p>
    <p>Se você tiver alguma dúvida sobre este CLUF, entre em contato conosco em (em breve).</p>
  </>
);

type Props = {
  onAccept: () => void;
  onDecline: () => void;
};

export default function ({ onAccept, onDecline }: Props) {
  return (
    <div className="m-1 bg-black overflow-y-scroll absolute inset-0 pb-safe-area">
      <div className="prose">{text}</div>
      <div className="flex gap-2 my-2">
        <button className="btn btn-primary" onClick={onAccept}>
          Aceitar
        </button>
        <button className="btn btn-default" onClick={onDecline}>
          Recusar
        </button>
      </div>
    </div>
  );
}
