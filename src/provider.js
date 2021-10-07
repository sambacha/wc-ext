import WalletConnectProvider from '@walletconnect/web3-provider';
import provider from 'eth-provider';

const wcProvider = new WalletConnectProvider({
  rpcUrl: 'https://api.staging.sushirelay.com/v1',
});

const fallbackProvider = provider(['https://api.sushirelay.com/v1']);

fallbackProvider.enable = () => {
  window.ethereum = wcProvider;

  return wcProvider.enable();
};

window.ethereum = fallbackProvider;

// window.ethereum =
