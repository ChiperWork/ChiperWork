import { Link } from 'preact-router';

import Show from '@/components/helpers/Show';
import { RouteProps } from '@/views/types';

import Follow from '../components/buttons/Follow';
import Header from '../components/header/Header.tsx';
import Avatar from '../components/user/Avatar';
import Name from '../components/user/Name';
import { translate as t } from '../translations/Translation.mjs';
import Helpers from '../utils/Helpers';

const CHIRPWORK_INFO_ACCOUNT = 'npub1lwp2uxd6w4mjk5zlyvpsp4gc3j8j3cgtnumpw3kzt6sdk6zmplhq0yvurz';

const About: React.FC<RouteProps> = () => (
  <>
    <Header />
    <div className="main-view prose">
      <div className="px-2 md:px-4 py-2">
        <h2 className="mt-0">{t('about')}</h2>
        <p>ChiperWork é uma plataforma de rede social avançada, oferecendo recursos excepcionais:</p>
        <ul>
          <li>
            <b>Acessibilidade.</b> Não requer número de telefone ou inscrição. Basta escolher um nome ou alias e começar!
          </li>
          <li>
            <b>Segurança.</b> Totalmente de código aberto. Garantimos a segurança dos seus dados.
          </li>
          <li>
            <b>Disponibilidade ininterrupta.</b> Não depende de servidores centralizados. Os usuários podem até mesmo conectar-se diretamente uns aos outros.
          </li>
        </ul>

        <Show when={!Helpers.isStandalone()}>
          <h3>Versões</h3>
          <p>
            <ul>
              <li>
                <a target="_blank" href="https://chirpwork.com">
                  chirpwork.com
                </a>{' '}
                (web)
              </li>
              <li>
                <a target="_blank" href="https://github.com/chirpwork/chirp-messenger/releases/latest">
                  Desktop
                </a>{' '}
                (macOS, Windows, Linux)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/chirpwork-the-nostr-client/id1665849007"
                >
                  iOS
                </a>
              </li>
              <li>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=to.chirpwork.twa">
                  Android
                </a>{' '}
                (
                <a
                  target="_blank"
                  href="https://github.com/chirpwork/chirp-messenger/releases/tag/jan2023"
                >
                  apk
                </a>
                )
              </li>
            </ul>
          </p>
        </Show>

        <h3>Documentos do ChiperWork</h3>
        <p>
          Visite o <a href="https://github.com/chirpwork/faq">FAQ</a> do ChiperWork para recursos, explicações e solução de problemas.
        </p>

        <h3>Privacidade</h3>
        <p>{t('application_security_warning')}</p>

        <h3>Seguir</h3>
        <div className="flex flex-row items-center w-full justify-between">
          <Link href={`/${CHIRPWORK_INFO_ACCOUNT}`} className="flex flex-row items-center gap-2">
            <Avatar str={CHIRPWORK_INFO_ACCOUNT} width={40} />
            <Name pub={CHIRPWORK_INFO_ACCOUNT} placeholder="ChiperWork" />
          </Link>
          <Follow className="btn btn-neutral btn-sm" id={CHIRPWORK_INFO_ACCOUNT} />
        </div>

        <p>
          Canal <a href="https://t.me/chirpworkmessenger">Telegram</a>.
        </p>

        <p>
          Lançado sob licença MIT. Código: {' '}
          <a href="https://github.com/chirpwork/chirp-messenger">Github</a>.
        </p>
        <br />
      </div>
    </div>
  </>
);

export default About;
