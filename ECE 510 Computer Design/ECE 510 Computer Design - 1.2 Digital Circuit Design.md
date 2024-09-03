Preet Patel
Course: ECE 510 Computer Design
08-19-2024, 2:58 PM
Lecture 1: 1.2 Digital Circuit Design
#computerdesign
[[Computer Science]]
[[Electrical Engineering]]


## Part A: Overview of Digital Circuit Design
#### Definitions and Acronyms
- PCB: Printed Circuit Board
- ASIC: Application Specific Integrated Circuit
- VHDL: VHSIC Hardware Description Language
- VHSIC: Very High-Speed Integrated Circuit
- PLD: Programmable Logic Device
- CPLD: Complex Programmable Logic Device
- **FPGA**: Field Programmable Gate Array
- RTL: Register Transfer Level
- IC: Integrated Circuit
- VLSI: Very Large Scale Integration

#### Hardware Description Languages and Methods
- VHDL: primarily used by FPGA designers
- Verilog: primarily used for custom designs, standard cell designs, and gate arrays
	- these are the 4 custom ASIC methods
- System C: not very used
<u>Methods:</u>
1. Behavioral
2. Data Flow
3. Structural
4. Boolean (NAND, XOR, etc.)

<u>Question</u>: *"If a company asks you to create a PCD with a custom hardware solutions, how many choices do you have?"*
1. COTS - "Commercial off the shelf", sometimes preferred because of ease to implement
Custom ASIC Methods:
	2. Full custom
	3. standard cell
	4. gate array
	5. FPGA
6. Microcontroller - Arduino, Raspberry Pi,; contains CPU, ROM, RAM, I/O
7. Microprocessor - Contains CPU
8. Digital Signal Processor
<u>Answer</u>: *You have 8 different options for a custom hardware solution.*

#### $\mu$C (Microcontroller) vs DSP vs FPGA Selection
- Tesla changed from using NVIDIA GPUs to implementing a custom ASIC design for the self-driving cameras and saw a 21X increase (from 110 to 2300 FPS)!
- The chip cost also reduced by 20%
- Overall, the GPU was a COTS device and was easy to implement but the custom ASIC design is much more powerful and cost effective, which makes it the more efficient choice

#### Top Technologies from 2000 to 2010
- Smartphones
- Social Networking
- VOIP - "Voice over internet protocol"
- LED Lighting
- Multicore CPU's
- Cloud Computing
- Drone aircraft
- Planetary rovers
- Smart grid - Flexible AC transmission, helps prevent blackouts
- Digital Photography
- Class-D Audio
Most, if not all, of these technologies include digital ASIC 

----------------
## Part B: Digital IC Content in a Devices
- 8 digital ICs in a 2004 Motorola cell phone
#### iPhone Costs and Terminology
- COGS - "Cost of Goods Sold"
- Gross Profit = Sales price - COGS
- Net profit = gross profit - overhead (rent, utilities, salaries, etc.)
- 2007 iPhone cost = $599
- Gross profit on iPhone = Sales - COGS $\Rightarrow$ $599 - $266 = $333 
- in the first weekend, Apple sold 500k phones:
	500,000 * $333 = **$167,000,000** net profit
#### Timing and Clock Generators
- Multiple clocks of various frequencies that are *phase locked* are required for most large digital ASICs
- Can contain both analog and digital circuits
- Can be stand-alone ICs or integrated onto the ASIC
	- PLL: Phase-locked loop, Analog and Digital
	- DLL: Delay-locked loop, all Digital
Schematic of typical PLL:
```mermaid.js
graph LR;
    idInput[Input] --> idPhase[∅ Phase Detector]
    idPhase --> idFilter[Analog Loop Filter]
    idFilter --> idVoltage(Voltage Control Oscillator)
    idVoltage --> idOut[Out]
    idVoltage o--> idFreq[Frequency Divider]
    idFreq --> idPhase
```
![[Pasted image 20240819160223.png]]
This is a typical signal
- $i(t)$ is the input signal
- $e(t)$ is the error signal which is modeled by the difference in input and output signals
- the goal is to minimize the error signal
![[Pasted image 20240819160347.png]]
This is a phase locked signal
- The error signal has been completely minimized because both the input and output in phase
#### Xbox 360
contains 4 Custom Digital ICs
- Chipidea video IC
- SiST I/O IC
- ATI Graphics $\mu$P (microprocessor)
- IBM CPU

----
## IC Design Flow
**4 Major Design Steps:**
1. Simulation
2. Layout
3. Fabrication
4. Testing
![[Pasted image 20240819180751.png]]
If the circuit does not meet the specs, you can rectify the approach by:
1. Use a different approach
2. Use a different process
3. Relax the specs/constraints
#### Parasitics in IC Design
1. Substrate capacitance (Csub), happens in a parallel-plate capacitor
2. Co-planar capacitance (Ccop)
3. Package capacitance (Cpkg)
4. PCB capacitance (Cpcb)
![[Pasted image 20240819182016.png]]
- 90 nm process refers to the size of the smallest component, which in most cases is the gate of a transistor. 

#### Parallel-Plate Capacitor
![[Pasted image 20240819184951.png]]
- Parallel-Plate Capacitance: $C = \epsilon_{o}\epsilon_{r} \times plate \text { } area \ (L\times W)$
- 
	- $\epsilon_{o}$ : permittivity of vacuum = $8.854 \times 10^{-18} \, \frac{{F}}{\mu{m}}$ $\Leftarrow$ Farads per micrometer
	- $\epsilon_{r}$ : relative permittivity of material (silicon): $Si = 11.9 \approx 12$

$$
\begin{align*}
Csub = \frac{8.85 \times 10^{-18} \, \frac{{F}}{\mu{m}}\, \times 12 \times 10000 \mu{m} \times 0.09\mu{m}}{250\mu{m}}
\end{align*}
$$
$$
\begin{align*}
=379\space {a}{F} &= 0.379\space {f}F\\
a &= atto, 10^{-18}\\
f &= femto, 10^{-15}
\end{align*}
$$
#### Co-planar Capacitance
![[Pasted image 20240819185537.png]]
- if $d \ge{100} \Rightarrow ignore$
$$
\begin{align*}\\
C_{cop}=\frac{\epsilon_{r}\epsilon_{o}\space L\times W}{d}
\end{align*}
$$

$$
\begin{align*}
C_{cop} = \frac{3.9 \times 8.85 \times 10^{-18} \, \frac{{F}}{\mu{m}}\, \times 12 \times 1000 \times 0.09}{0.09}
\end{align*}
$$
$$
\begin{align*}\\
=34.5\space{f}F\space=34.5\times10^{-15}F
\end{align*}
$$
$$
\begin{align*}\\\\
C_{total}=C_{cop}+C_{sub}
\end{align*}
$$
#### Printed Circuit Board
- for PCBs, we use a material called *FR4* with a $\epsilon_{r}=3.7$
- $C_{total \space out} = C_{pkg1}+C_{pcb}+C{pkg2}+C_{pkg3}$
How to reduce parasitics:
1.  Layout Fix: 
	- reduce both Csub and Ccop by reducing trace lengths
	- Increase d for Ccop
2. Use a higher performance process - tradeoff is more cost
3. Increase current drive - tradeoff is more power
4. Review and change specs (last option)