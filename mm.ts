import { initializeProvider } from '@metamask/providers';

// Create a stream to a remote provider:
const metamaskStream = new LocalMessageDuplexStream({
  name: 'inpage',
  target: 'contentscript',
});

// this will initialize the provider and set it as window.ethereum
initializeProvider({
  connectionStream: metamaskStream,
});

const { ethereum } = window;
