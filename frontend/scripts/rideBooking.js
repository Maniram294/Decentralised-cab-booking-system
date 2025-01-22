const rideForm = document.getElementById('ride-form');
const bookingStatus = document.getElementById('booking-status');

rideForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;

    if (!userAccount) {
        alert('Please connect your wallet first!');
        return;
    }

    const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
    const CONTRACT_ABI = [/* Paste your contract ABI here */];

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    try {
        bookingStatus.textContent = 'Booking your ride...';

        // Call the bookRide function
        await contract.methods.bookRide(pickup, destination).send({ from: userAccount });

        bookingStatus.textContent = 'Ride booked successfully!';
    } catch (error) {
        console.error(error);
        bookingStatus.textContent = 'Failed to book the ride.';
    }
});
