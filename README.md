Toy Robot Simulator
===================

Solution
-----------

- The application receives a **file** as input.
- Test data is provided in the `input` folder.
- To start the application, any of the following commands are supported:
  - `npm start` will by default take as input the file `input.txt` at the root of the project.
  - `npm run play <file>` will take the file `<file>` as input.

- The project is fully unit tested, use `npm install` followed by `npm test` to run the tests.
- The table width and height are configurable in `config/config.json`.
- The robot actions are also configurable in `config/config.json`.
- Upper case and Lower case are ignored and can both be used.

Test Data
------------------------

### Example 1: input/input1.txt, example provided

    PLACE 0,0,NORTH
    MOVE
    REPORT

Output:

    0,1,NORTH

### Example 2: input/input2.txt, example provided

    PLACE 0,0,NORTH
    LEFT
    REPORT

Output:

    0,0,WEST

### Example 3: input/input3.txt, example provided

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Output:

    3,3,NORTH

### Example 4: input/input4.txt

    PLACE 5,5,NORTH
    REPORT
    MOVE
    REPORT
    RIGHT
    MOVE
    REPORT
    RIGHT
    MOVE
    REPORT

Output:

    5,5,NORTH
    5,5,NORTH
    5,5,EAST
    5,4,SOUTH

Explanation:
  The Robot cannot fall from the table,

- MOVE NORTH is ignored
- MOVE EAST is ignored
- MOVE SOUTH is executed


### Example 5: input/input5.txt

    PLACE 0,0,WEST
    REPORT
    MOVE
    REPORT
    LEFT
    MOVE
    REPORT
    LEFT
    MOVE
    REPORT

Output:

    0,0,WEST
    0,0,WEST
    0,0,SOUTH
    1,0,EAST

Explanation:
    The Robot cannot fall from the table, 
-   MOVE WEST is ignored
-   MOVE SOUTH is ignored
-   MOVE EAST is executed

### Example 6: input/input6.txt

    REPORT
    MOVE
    LEFT
    RIGHT
    REPORT
    PLACE 7,7,NORTH
    REPORT
    PLACE 3,3,NORTH
    REPORT
    MOVE
    REPORT
    PLACE 10,10,NORTH
    MOVE
    REPORT
    PLACE 0,0,NORTH
    MOVE
    REPORT

Output:

    3,3,NORTH
    3,4,NORTH
    3,5,NORTH
    0,1,NORTH

Explanation:
- The application discards all commands in the sequence until a valid PLACE command has been executed.
- The first valid is PLACE 3,3,NORTH.
- The robot moves freely afterwards.
- PLACE 10,10,NORTH is ignored, but all subsequent moves are allowed.
- PLACE 0,0,NORTH is allowed.

### Example 7: input/input7.txt

    PLACE 3,3,NORTH
    LEFT
    LEFT
    LEFT
    LEFT
    MOVE
    REPORT
    RIGHT
    RIGHT
    RIGHT
    RIGHT
    MOVE
    REPORT

Output:

    3,4,NORTH
    3,5,NORTH

Explanation:
- Turning 4 times LEFT or RIGHT puts the robot back into its original direction

## Acknowledgements

This implementation of Toy Robot was developed by  [Jean-Yves Chanal](https://github.com/sevy07).

The Toy Robot was created by [Jon Eaves](https://twitter.com/joneaves).
