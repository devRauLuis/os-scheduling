# OS Scheduling

![OS Scheduling](https://github.com/devRauLuis/os-scheduling/blob/main/public/screenshot.png?raw=true)

This repository contains a React application that simulates various scheduling algorithms used in operating systems. The application provides a visual representation of how different scheduling algorithms work.

## Features

The application supports the following scheduling algorithms:

1.  **Priority Scheduling:** In this algorithm, each process is assigned a priority. The process with the highest priority (i.e., the smallest integer) is executed first.
2.  **FIFO (First-In-First-Out) Scheduling:** This is the simplest scheduling algorithm. In this scheme, the process that arrives first is executed first.
3.  **Quantum Scheduling:** This algorithm assigns a fixed time unit per process, also called a quantum, during which a process can run. If the process does not finish execution during the quantum, it is put back in the queue.
4.  **Round Robin Scheduling:** This is a pre-emptive version of the FIFO algorithm. In this scheme, a small time slice or quantum is defined, all the jobs are kept in queue. The first job is taken from the queue, it is allowed to run for a time quantum, and then it is put back in the queue.

## Installation

Clone the repository

Install the dependencies using `yarn install`

Start the application using `yarn dev`

## Usage

Navigate to the different scheduling algorithms using the navigation bar. You can add processes and see how they are scheduled based on the selected algorithm.

## Scripts

`yarn dev`: Starts the development server.

`yarn build`: Builds the app for production.

`yarn lint`: Lints the codebase.

`yarn preview`: Locally preview production build.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

