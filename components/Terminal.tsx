import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "./magicui/terminal";
  
  export function TerminalMinishell() {
    return (
      <Terminal className="bg-[#222] text-white max-w-[600px] w-full h-full">
        <TypingAnimation >&gt; ./Minishell</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-">
          <p className="w-[50px] md:w-full">echo 'hello I'm insde my shell'</p>
        </AnimatedSpan>

        <AnimatedSpan delay={1800}  className="text-green-500">
          <p>hello I'm insde my shell</p>
        </AnimatedSpan>
        
        <AnimatedSpan delay={3500} className="text-green-">
          <p>ls</p>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3800} className="text-green-500 w-full">
          <p className="w-[100px] md:w-full"><span className="text-blue-500 ">app</span> file file.txt strlen.c <span className="text-blue-500 ">day00</span> day10.jaja</p>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-">
          <p className="w-[50px] md:w-full">export VAR=otmane && echo hey $VAR</p>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-green-500">
          <p>hey otmane</p>
        </AnimatedSpan>

        <AnimatedSpan delay={7500} className="text-green-">
          <p className="w-[50px] md:w-full ">(echo 1 || echo 2 && echo 3) && <br/>(((echo 4 || echo 5) && echo 6) || echo 7)</p>
        </AnimatedSpan>

        <AnimatedSpan delay={7800} className="text-green-500">
          <p>1</p>
          <p>3</p>
          <p>4</p>
          <p>6</p>
        </AnimatedSpan>
      </Terminal>
    );
  }
  

  