import CH_Account from './ch-account/Ch-Account.tsx';
import Account from './Account.js';
import Appearance from './Appearance';
import Backup from './Backup';
import ContentPage from './Content';
import Dev from './Dev';
import Language from './Language';
import Network from './Network.js';
import Payments from './Payments';
import SocialNetwork from './SocialNetwork';

const SettingsContent = (props) => {
  const pages = {
    account: Account,
    network: Network,
    appearance: Appearance,
    language: Language,
    content: ContentPage,
    payments: Payments,
    backup: Backup,
    social_network: SocialNetwork,
    iris_account: CH_Account,
    dev: Dev,
  };

  const SelectedContent = pages[props.id] || pages.account;

  return (
    <div className="prose">
      <SelectedContent />
    </div>
  );
};

export default SettingsContent;
