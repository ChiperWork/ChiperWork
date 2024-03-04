import { Link } from 'preact-router';

import Follow from '@/components/buttons/Follow';
import Avatar from '@/components/user/Avatar';
import Name from '@/components/user/Name';
import Key from '@/nostr/Key';
import { translate as t } from '@/translations/Translation.mjs';

const SUGGESTED_FOLLOWS = [
  [
    'npub1mj09mzcpt7q7srnutuqt8jmyfzr5z8nfakg628ej0xzv9rvle05qlws3cv',
    'Criador da ChiperWork, Desenvoledor, Escritor e Hacker Ético.',
  ], // Josyel Buenos
  [
    'npub195zw6mpu4ga7z78u739d8rp5yhpy67sktay9p9aaaqn94c9m8r5q4esrhq',
    'Sou gostoso, amante da história.',
  ], // Iran
  ['npub1ue9emc9s6pevjzrvte0xmfvc23r7xnl0evrtharywc9cv4d0f5ssk5uypf', 'Criador de conteúdos sobre Hacking.'], // Debian.
  [
    'npub1e2fm90wjp8y4ntgntw3nysdq68pq3yqn4j4z7s9e5976ts6rspssz5qfn9',
    'CEO do WhiteHat Fórum, criador de conteúdos digitais, e hacker e desenvolvedor.',
  ], // WhiteHat Fórum.

  ['npub1g53mukxnjkcmr94fhryzkqutdz2ukq4ks0gvy5af25rgmwsl4ngq43drvk', 'Desenvolvedor original da iris.'], // sirius
  ['npub1zqyeg2n4vvjcw5jkgdmh7mdgk3uek7whuc2nffjyaa60ge42vevq8pxs09', 'Criador de conteúdos, hacker e desenvoledor.'], // Deivison
  [
    'npub1az9xj85cmxv8e9j9y80lvqp97crsqdu2fpu3srwthd99qfu9qsgstam8y8',
    'Bitcoin hardware entrepreneur and podcaster',
  ], // nvk
  [
    'npub180cvv07tjdrrgpa0j7j7tmnyl2yr6yr7l8j4s3evf6u64th6gkwsyjh6w6',
    'Original developer of Nostr',
  ], // fiatjaf
  [
    'npub1zplkxvw0maj7qg4j25v8lvhkhtqucnjtg25av5aj9v7tf5c2cpjqmh79dv',
    'Pogramador, youtuber e pentester.',
  ], // carla
];

export default function FollowSuggestions({ setShowFollowSuggestions }) {
  return (
    <div className="flex flex-col flex-grow px-2 py-4 md:px-4 gap-2">
      <p className="text-base">{t('Siga_as_informações_de_alguém')}</p>
      {SUGGESTED_FOLLOWS.map(([pub, description]) => (
        <div key={pub + 'sujestões'} className="flex items-center space-x-4">
          <Link href={`/${pub}`} className="flex flex-grow items-center space-x-2">
            <div className="w-10 h-10">
              <Avatar str={pub} width={40} />
            </div>
            <div className="flex-grow">
              <Name pub={pub} placeholder="Sujestões para seguir." />
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </Link>
          <Follow id={pub} />
        </div>
      ))}
      <p className="my-2">
        <button className="btn btn-primary" onClick={() => setShowFollowSuggestions(false)}>
          {t('done')}
        </button>
      </p>
      <p className="text-base">
        {t('alternatively')}
        <i> </i>
        <Link href={`/${Key.toNostrBech32Address(Key.getPubKey(), 'npub')}`} className="link">
          {t('give_your_profile_link_to_someone')}
        </Link>
        .
      </p>
    </div>
  );
}
