> **Important Note:** This simulation is designed for desktop view only. For the best experience, please use a desktop monitor with a minimum resolution of 1280x720 pixels. The simulation may not function properly on smaller screens like mobile devices or tablets.

### 1. Understanding the Simulation

This simulation helps you learn about Arithmetic Logic Unit (ALU) implementation in Verilog:

- **ALU Design:** A combinational circuit that performs different arithmetic and logic operations on two inputs based on control signals.
- The ALU performs different operations controlled by select lines S0 and S1:
  - When S0=0, S1=0: Addition (Out = A + B, Cout = carry)
  - When S0=0, S1=1: Subtraction (Out = A - B)
  - When S0=1, S1=0: AND operation (Out = A & B)
  - When S0=1, S1=1: OR operation (Out = A | B)

### 2. Getting Started

1. Enter your module name and testbench name in the respective fields:
   - Module names must follow [Verilog naming conventions](https://www.chipverify.com/verilog/verilog-syntax).
   - Only letters, numbers, and underscores are allowed (no hyphens or special characters).
   - Testbench name must end with '_tb'.

### 3. Building the Verilog Module

1. In the first column, arrange the code blocks in the correct order by dragging and dropping them:
   - The code block that defines inputs, outputs, and module name should be placed first
   - Followed by the code block that defines the module functionality
   - Finally, the end of module block

2. Select the appropriate signals:
   - Inputs: A, B (data inputs), S0, S1 (select inputs)
   - Outputs: Out, Cout

3. Define the functionality using the always block:
   - The output Out and Cout must be assigned based on the values of S0 and S1
   - When S0==0 and S1==0: Out = A XOR B (sum), Cout = A AND B (carry)
   - For other combinations, refer to the function table in the theory section
   - The assignment operator must be '=' (not '<=') because this is combinational logic

### 4. Creating the Testbench

1. In the second column, arrange the testbench code blocks in the correct order:
   - Testbench name definition
   - Signal declarations (reg for inputs, wire for outputs)
   - Module instantiation
   - Input wave definitions
   - End of module

2. Define the testbench signals:
   - `reg A, B, S0, S1; wire Out, Cout`

3. Connect the ports correctly in the module instantiation:
   - Maintain the same order as defined in the module
   - Ensure proper mapping: inputs A, B, S0, S1 and outputs Out, Cout

### 5. Validation and Observation

1. Click the "Validate" button to check your code.
2. The observation column will show:
   - Error messages in red if there are mistakes. Refer to the [Troubleshooting](#6-troubleshooting) section below for dealing with the Error messages.
   - A truth table showing the expected behavior for different input combinations if the code is correct.
3. If you need to start over, click the "Reset" button to shuffle the code blocks.

#### Verilog Syntax Reference

- For detailed Verilog syntax rules, refer to the [Verilog Syntax Guide](https://www.chipverify.com/verilog/verilog-syntax).
- For module and testbench examples, visit [ASIC World Verilog Tutorial](https://www.asic-world.com/verilog/veritut.html).

### 6. Troubleshooting

If you see error messages, carefully check:

- Module and testbench names follow the naming rules.
- Code blocks are in the correct order.
- All signal selections match the expected values (A, B, S0, S1 for inputs; Out, Cout for outputs).
- Port connections are properly defined in the module instantiation.
- The ALU functionality is correctly implemented for all select line combinations.

Additional tips:

- Use the Reset button to start fresh if needed.
- Verify the truth table matches the expected ALU behavior for each operation.
- Observe the fluctuations in input waves and corresponding output behavior.

#### Important Reminders

- Verilog is case-sensitive.
- All signals must be properly declared before use.
- Testbench signals must match the module ports.
- Code blocks must be in the correct order for the simulation to work.
- Use blocking assignment (=) for combinational logic.
- Ensure proper implementation of all ALU operations based on select signals S0 and S1.
