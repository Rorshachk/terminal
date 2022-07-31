import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const bio = `<p># $ whoami </p> <br>
  I am Rorshachk. My real name is Shuangmu Hu, a senior student majored in computer science in UCSD. <br>
  I'm currently interning as a software engineer in system infrasturcture team at WeRide.corp. <br> 
  I love computer systems. Most of my projects are computer system related. <br> 
  And I'm a big user of Linux. That's also the reason why I create this terminal-style website. <br>
  If you are also a Linux user, you will find this website is easy to use :) <br>
  I like competitive programming. I started attending competitive programming contest since high school. <br>
  I have won 3rd place in South California ICPC contest, and advanced to the North American Championship. <br>
  I'm a music enthusiast. I listen to post-rock, indie-rock, as well as Kpop and Jpop. <br>
  I used to watch lots of anime and play a lot of games. <br>
  </p>
  <p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=rorshachk&show_icons=true&theme=gruvbox&count_private=true" alt="m4tt72" />
  `
  return bio;
};
