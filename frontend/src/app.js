const contractAddress = "0xE6353AA5c51F9642509C793c3E582B2195844218"; // Replace with your deployed contract address
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "driver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "DriverRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "rideId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "driver",
          "type": "address"
        }
      ],
      "name": "RideAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "rideId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "driver",
          "type": "address"
        }
      ],
      "name": "RideCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "rideId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fare",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "source",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "destination",
          "type": "string"
        }
      ],
      "name": "RideRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rideId",
          "type": "uint256"
        }
      ],
      "name": "acceptRide",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rideId",
          "type": "uint256"
        }
      ],
      "name": "completeRide",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "drivers",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "driverAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isAvailable",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "registerDriver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "registerUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fare",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_source",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_destination",
          "type": "string"
        }
      ],
      "name": "requestRide",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rideCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rides",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "driver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fare",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isCompleted",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "source",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "destination",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];

let web3;
let contract;
let userAddress;

// Initialize Web3
window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log("Web3 initialized");
  } else {
    alert("Please install MetaMask!");
  }
});

// Connect Wallet
document.getElementById("connect-wallet").addEventListener("click", async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  userAddress = accounts[0];
  document.getElementById("wallet-address").textContent = `Connected: ${userAddress}`;
});

// Role Selection
document.getElementById("driver-role").addEventListener("click", () => {
  toggleInterface("driver");
});
document.getElementById("rider-role").addEventListener("click", () => {
  toggleInterface("rider");
});

// Driver Functions
document.getElementById("register-driver").addEventListener("click", async () => {
  await contract.methods.registerDriver("DriverName", "CarType").send({ from: userAddress });
  alert("Driver registered successfully!");
});

document.getElementById("accept-ride").addEventListener("click", async () => {
  await contract.methods.acceptRide(rideId).send({ from: userAddress });
  alert("Ride accepted!");
});

document.getElementById("withdraw-earnings").addEventListener("click", async () => {
  await contract.methods.withdrawFunds().send({ from: userAddress });
  alert("Earnings withdrawn!");
});

// Rider Functions
document.getElementById("register-rider").addEventListener("click", async () => {
  await contract.methods.registerRider("RiderName").send({ from: userAddress });
  alert("Rider registered successfully!");
});

document.getElementById("book-ride").addEventListener("click", async () => {
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const distance = 10; // Example value; compute dynamically in real implementation
  await contract.methods.bookRide(pickup, drop, distance).send({ from: userAddress });
  alert("Ride booked successfully!");
});

// Utility Functions
function toggleInterface(role) {
  document.getElementById("driver-interface").classList.toggle("hidden", role !== "driver");
  document.getElementById("rider-interface").classList.toggle("hidden", role !== "rider");
}
