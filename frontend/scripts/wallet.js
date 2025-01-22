const connectWalletButton = document.getElementById('connect-wallet');
const walletAddressDisplay = document.getElementById('wallet-address');
const walletBalanceDisplay = document.getElementById('wallet-balance');

let userAccount;

connectWalletButton.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
        walletAddressDisplay.textContent = userAccount;

        // Fetch and display balance
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(userAccount);
        walletBalanceDisplay.textContent = web3.utils.fromWei(balance, 'ether');
    } else {
        alert('MetaMask is not installed!');
    }
});
