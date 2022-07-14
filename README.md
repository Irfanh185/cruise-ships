# Cruise Ships OOP Project

<p>This project was completed as part of the Manchester Codes software engineering course. This projects main objective was to learn about Object Oriented Programming principles using JavaScript, and to learn Test Driven Development.
This project contains three objects that interact with each other, allowing a 'ship' to travel to different ports using a itinerary.</p>

<p>This project uses Node, JavaScript and Jest.

## How to setup

Download and setup: 
* Fork the project repository
* Copy the project Https link, navigate to the local folder where the project is installed, and run ``git clone`` 
* Switch to the new installed project folder and run ``npm install``
* Install Jest by running ``npm install -D jest``


## How to run the project

You can run the project locally using the node REPL.

### Setting up node REPL
1. In the terminal, run ``node``
2. In the node REPL, run the following line by line to import the ship, port, and itinerary objects:
	*  ``const Itinerary = require('./src/Itinerary');``
	* ``const Port = require('./src/Port');``
	* ``const Ship = require('./src/Ship');``
3. Next in the node REPL, instantiate the shIp, itinerary, and ports of your choice:
	* ``const dover = new Port('Dover');`` (repeat with your next port if needed)
  * ``const calais = new Port('Calais');``
	* ``const itinerary = new Itinerary([dover, calais]);``
	* ``const ship = new Ship(itinerary);``
 The ship is now set up to use the method to navigate the itinerary.
 
### Navigate the ship along the itinerary in the node REPL

1. Run ``ship.currentPort.name;``
2. Run ``ship.setSail();``
3. Run ``ship.dock();``
4. Run ``ship.currentPort.name;``
5. To see the previous port, run ``ship.previousPort.name``


## Next steps

<p> This projects main objective was to learn the basic principle of OOP and practice Test Driven Development.</p>

<p> I have created a GUI to make it easier for the user to navigate and use the program. You can view the repo here <a href="https://github.com/Irfanh185/cruise-ships-gui">Cruise Ship GUI</a></p>


## Author

Irfan Hussain

[website](https://irfanh185.github.io/portfolio-mcr-1/) | [linkedin](https://www.linkedin.com/in/irfan-hussain/)
