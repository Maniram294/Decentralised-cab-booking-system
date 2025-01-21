// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CabBooking {
    struct User {
        string name;
        address userAddress;
        bool isRegistered;
    }

    struct Driver {
        string name;
        address driverAddress;
        bool isAvailable;
        bool isRegistered;
    }

    struct Ride {
        uint256 id;
        address user;
        address driver;
        uint256 fare;
        bool isCompleted;
        string source;         // Source location
        string destination;    // Destination location
    }

    mapping(address => User) public users;
    mapping(address => Driver) public drivers;
    mapping(uint256 => Ride) public rides;

    uint256 public rideCounter;

    event UserRegistered(address indexed user, string name);
    event DriverRegistered(address indexed driver, string name);
    event RideRequested(uint256 indexed rideId, address indexed user, uint256 fare, string source, string destination);
    event RideAccepted(uint256 indexed rideId, address indexed driver);
    event RideCompleted(uint256 indexed rideId, address indexed user, address indexed driver);

    modifier onlyRegisteredUser() {
        require(users[msg.sender].isRegistered, "User is not registered.");
        _;
    }

    modifier onlyRegisteredDriver() {
        require(drivers[msg.sender].isRegistered, "Driver is not registered.");
        _;
    }

    // Register a new user
    function registerUser(string memory _name) external {
        require(!users[msg.sender].isRegistered, "User already registered.");
        users[msg.sender] = User(_name, msg.sender, true);
        emit UserRegistered(msg.sender, _name);
    }

    // Register a new driver
    function registerDriver(string memory _name) external {
        require(!drivers[msg.sender].isRegistered, "Driver already registered.");
        drivers[msg.sender] = Driver(_name, msg.sender, true, true);
        emit DriverRegistered(msg.sender, _name);
    }

    // Request a ride (User enters source, destination, and fare)
    function requestRide(uint256 _fare, string memory _source, string memory _destination) external payable onlyRegisteredUser {
        require(_fare > 0, "Fare must be greater than 0.");
        require(msg.value == _fare, "Fare amount must be sent with the request.");

        rideCounter++;
        rides[rideCounter] = Ride(rideCounter, msg.sender, address(0), _fare, false, _source, _destination);
        emit RideRequested(rideCounter, msg.sender, _fare, _source, _destination);
    }

    // Accept a ride (Driver accepts a ride request)
    function acceptRide(uint256 _rideId) external onlyRegisteredDriver {
        Ride storage ride = rides[_rideId];
        require(ride.driver == address(0), "Ride already accepted.");
        require(!ride.isCompleted, "Ride is already completed.");

        ride.driver = msg.sender;
        drivers[msg.sender].isAvailable = false;
        emit RideAccepted(_rideId, msg.sender);
    }

    // Complete a ride (Driver marks the ride as completed and gets paid)
    function completeRide(uint256 _rideId) external onlyRegisteredDriver {
        Ride storage ride = rides[_rideId];
        require(ride.driver == msg.sender, "You are not the assigned driver.");
        require(!ride.isCompleted, "Ride is already completed.");
        require(address(this).balance >= ride.fare, "Contract does not have enough balance.");

        // Mark the ride as completed
        ride.isCompleted = true;
        drivers[msg.sender].isAvailable = true;

        // Transfer payment to the driver
        (bool success, ) = payable(ride.driver).call{value: ride.fare}("");
        require(success, "Payment to the driver failed.");

        emit RideCompleted(_rideId, ride.user, ride.driver);
    }

    // Fallback function to accept payments
    receive() external payable {}

    // Function to check contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
